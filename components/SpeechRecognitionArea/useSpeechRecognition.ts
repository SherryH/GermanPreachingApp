import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const getSpeechRecognition = () => {
  if (typeof window === 'undefined') return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition;
};

export const useSpeechRecognition = () => {
  const [isRecognising, setIsRecognising] = useState(false);
  const [speechArea, setSpeechArea] = useState('');
  const [mirrorArea, setMirrorArea] = useState('');
  const recognitionRef = useRef(null);

  // Initialize recognition instance when component mounts
  useEffect(() => {
    const SpeechRecognition = getSpeechRecognition();
    if (!SpeechRecognition) return;

    // Create a new instance for this component
    recognitionRef.current = new SpeechRecognition();

    // Configure the recognition instance
    recognitionRef.current.lang = 'de-DE';
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.maxAlternatives = 1;

    // Set up event handlers
    recognitionRef.current.onstart = function () {
      setIsRecognising(true);
    };

    recognitionRef.current.onend = function () {
      setMirrorArea('');
      setIsRecognising(false);
    };

    recognitionRef.current.onerror = function () {
      setIsRecognising(false);
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };

    recognitionRef.current.onresult = function (word) {
      let transcript = '';
      let interimTranscript = '';
      for (let x = word.resultIndex; x < word.results.length; x++) {
        transcript = word.results[x][0].transcript;
        // API finished processing the current sentence, move onto the next sentence
        // isFinal is true
        if (word.results[x].isFinal) {
          console.log('isFinal', transcript);
          setSpeechArea((speechArea) => {
            // Add a newline character before the transcript if there's already text
            const prefix = speechArea.length > 0 ? '\n' : '';
            return speechArea + prefix + transcript;
          });
        } else {
          interimTranscript = interimTranscript + transcript;
          setMirrorArea(interimTranscript);
        }
      }
    };

    // Clean up when component unmounts
    return () => {
      if (recognitionRef.current) {
        try {
          if (isRecognising) {
            recognitionRef.current.stop();
          }
          // Remove all event listeners
          recognitionRef.current.onstart = null;
          recognitionRef.current.onend = null;
          recognitionRef.current.onerror = null;
          recognitionRef.current.onresult = null;
          recognitionRef.current = null;
        } catch (error) {
          console.error('Error cleaning up speech recognition:', error);
        }
      }
    };
  }, []);

  function startTranscribing() {
    if (isRecognising || !recognitionRef.current) return;

    try {
      recognitionRef.current.start();
    } catch (error) {
      // catch error
      console.log(
        `InvalidStateError: Failed to execute 'start' on 'SpeechRecognition': recognition has already started.`
      );
    }
  }

  function stopTranscribing() {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecognising(false);
    }
  }

  return {
    startTranscribing,
    stopTranscribing,
    isRecognising,
    speechArea,
    setSpeechArea,
    mirrorArea,
  };
};
