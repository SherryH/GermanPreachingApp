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
  // include isRecognising later
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
  function dictate() {
    recognition.onstart = function () {
      console.log('onstart====');
      // transcriptTextArea.innerHTML = ""
      setIsRecognising(true);
    };

    recognition.onend = function () {
      setIsRecognising(false);
      recognition.stop();
    };

    recognition.onerror = function () {
      setIsRecognising(false);
      recognition.abort();
    };

    recognition.onresult = function (char) {
      let transcript;
      for (let x = char.resultIndex; x < char.results.length; x++) {
        transcript = char.results[x][0].transcript;
        // API finished processing the speech, move onto the next sentence
        // isFinal is true
        if (char.results[x].isFinal) {
          console.log('isFinal', transcript);
          console.log({ isRecognising });
          console.log({ recognition });
          setIsRecognising(false);
        }
      }
    };
  }

  return {
    startTranscribing,
    isRecognising,
    setIsRecognising,
  };
};
