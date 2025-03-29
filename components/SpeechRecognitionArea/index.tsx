import styles from './SpeechArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useSpeechRecognition } from './useSpeechRecognition';
import { MirrorArea } from './MirrorArea';
import IconButton from '../Icon/IconButton';
import { useRef, useEffect } from 'react';

export const SpeechRecognitionArea = () => {
  const TextAreaRef = useRef<HTMLTextAreaElement>(null);
  const {
    startTranscribing,
    isRecognising,
    speechArea,
    setSpeechArea,
    mirrorArea,
    stopTranscribing,
  } = useSpeechRecognition();

  const clickHandler = (e) => {
    e.preventDefault();
    if (isRecognising) {
      stopTranscribing();
    } else {
      startTranscribing();
    }
  };

  const speechAreaChangeHandler = (e) => {
    setSpeechArea(e.target.value);
  };

  useEffect(() => {
    if (TextAreaRef.current) {
      TextAreaRef.current.scrollTop = TextAreaRef.current.scrollHeight;
    }
  }, [speechArea]);

  return (
    <div className={styles.speechArea}>
      <MirrorArea mirrorArea={mirrorArea} />
      <textarea
        ref={TextAreaRef}
        className={styles.textBox}
        value={speechArea}
        onChange={speechAreaChangeHandler}
      />
      <IconButton>
        <FontAwesomeIcon
          onClick={clickHandler}
          className={styles.mic}
          color={isRecognising ? 'red' : 'black'}
          size="sm"
          icon={faMicrophone}
        />
      </IconButton>
    </div>
  );
};
