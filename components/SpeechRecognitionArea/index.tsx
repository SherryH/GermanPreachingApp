import { useEffect, useState } from 'react';
import styles from './SpeechArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

export const SpeechRecognitionArea = () => {
  // click on the mic, toggle color red,
  const [isRecognising, setIsRecognising] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'de-DE';
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  const clickHandler = (e) => {
    e.preventDefault();
    setIsRecognising((isRecognising) => !isRecognising);
  };

  return (
    <div className={styles.speechArea}>
      <textarea className={styles.textBox} contentEditable></textarea>
      <FontAwesomeIcon
        onClick={clickHandler}
        className={styles.mic}
        color={isRecognising ? 'red' : 'black'}
        size="lg"
        icon={faMicrophone}
      />
    </div>
  );
};
