import styles from './SpeechArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

export const SpeechRecognitionArea = () => {
  // click on the mic, start recording voice
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  return (
    <div className={styles.speechArea}>
      <textarea className={styles.textBox} contentEditable></textarea>
      <FontAwesomeIcon
        className={styles.mic}
        color="black"
        size="sm"
        icon={faMicrophone}
      />
    </div>
  );
};
