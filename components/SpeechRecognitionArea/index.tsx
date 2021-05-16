import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './SpeechArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useSpeechRecognition } from './useSpeechRecognition';

export const SpeechRecognitionArea = () => {
  const { startTranscribing, isRecognising, setIsRecognising } =
    useSpeechRecognition();
  // click on the mic, toggle color red,

  //------
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  //---------

  const clickHandler = (e) => {
    e.preventDefault();
    setIsRecognising((isRecognising) => !isRecognising);
    startTranscribing();
  };

  return (
    <div className={styles.speechArea}>
      <textarea className={styles.textBox} contentEditable></textarea>
      <FontAwesomeIcon
        onClick={clickHandler}
        className={styles.mic}
        color={isRecognising ? 'red' : 'black'}
        size="2x"
        icon={faMicrophone}
      />
    </div>
  );
};
