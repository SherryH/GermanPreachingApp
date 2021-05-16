import { useState } from 'react';

export const SpeechRecognition =
  typeof window !== 'undefined' &&
  (window.SpeechRecognition || window.webkitSpeechRecognition);

let recognition;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'de-DE';
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
}

export const useSpeechRecognition = () => {
  const [isRecognising, setIsRecognising] = useState(false);
  const [speechArea, setSpeechArea] = useState('');
  const [mirrorArea, setMirrorArea] = useState('');

  function startTranscribing() {
    if (isRecognising) return;
    console.log({ isRecognising });
    console.log({ recognition });
    try {
      recognition.start();
      dictate();
    } catch (error) {
      // catch error
      console.log(
        `InvalidStateError: Failed to execute 'start' on 'SpeechRecognition': recognition has already started.`
      );
    }
  }

  function stopTranscribing() {
    recognition.stop();
    setIsRecognising(false);
  }

  function dictate() {
    recognition.onstart = function () {
      console.log('onstart====');
      setIsRecognising(true);
    };

    recognition.onend = function () {
      console.log('onend*****');
      setMirrorArea('');
      setIsRecognising(false);
      recognition.stop();
    };

    recognition.onerror = function () {
      setIsRecognising(false);
      recognition.abort();
    };

    // closure variable for updating speechArea correctly with previous text
    let newSpeech = '';
    recognition.onresult = function (char) {
      let transcript = '';
      let interimTranscript = '';
      for (let x = char.resultIndex; x < char.results.length; x++) {
        transcript = char.results[x][0].transcript;
        // API finished processing the speech, move onto the next sentence
        // isFinal is true
        if (char.results[x].isFinal) {
          console.log('isFinal', transcript);
          console.log({ isRecognising });
          console.log({ recognition });

          newSpeech = newSpeech + transcript;
          console.log('newSpeech   ', newSpeech);
          setSpeechArea(newSpeech);
        } else {
          interimTranscript = interimTranscript + transcript;
          console.log('interim...', interimTranscript);
          setMirrorArea(interimTranscript); // state update not triggered during onResult
          // maybe it does, just it is not placed on DOM yet!
          console.log('mirrorArea', mirrorArea);
        }
      }
    };
  }

  return {
    startTranscribing,
    isRecognising,
    setIsRecognising,
    speechArea,
    setSpeechArea,
    mirrorArea,
    stopTranscribing,
  };
};
