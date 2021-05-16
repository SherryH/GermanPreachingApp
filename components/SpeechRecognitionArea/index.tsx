import styles from './SpeechArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useSpeechRecognition } from './useSpeechRecognition';
import { MirrorArea } from './MirrorArea';

export const SpeechRecognitionArea = () => {
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

  return (
    <div className={styles.speechArea}>
      <MirrorArea mirrorArea={mirrorArea} />
      <textarea
        className={styles.textBox}
        contentEditable
        value={speechArea}
        onChange={speechAreaChangeHandler}
      />
      <FontAwesomeIcon
        onClick={clickHandler}
        className={styles.mic}
        color={isRecognising ? 'red' : 'black'}
        size="sm"
        icon={faMicrophone}
      />
    </div>
  );
};
