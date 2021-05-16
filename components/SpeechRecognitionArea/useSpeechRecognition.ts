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

    recognition.onresult = function (char) {
      let transcript = '';
      let interimTranscript = '';
      for (let x = char.resultIndex; x < char.results.length; x++) {
        transcript = char.results[x][0].transcript;
        // API finished processing the current sentence, move onto the next sentence
        // isFinal is true
        if (char.results[x].isFinal) {
          console.log('isFinal', transcript);
          setSpeechArea((speechArea) => {
            return speechArea + transcript;
          });
        } else {
          interimTranscript = interimTranscript + transcript;
          setMirrorArea(interimTranscript);
        }
      }
    };
  }

  return {
    startTranscribing,
    isRecognising,
    speechArea,
    setSpeechArea,
    mirrorArea,
    stopTranscribing,
  };
};
