import styles from '../../styles/Home.module.css';
import { SpeechRecognitionArea } from '../../components/SpeechRecognitionArea';
import ControlContainer10 from './ControlContainer10';
export default function Lecture10() {
  //lecture 10
  return (
    <>
      <div className={styles.controlWrapper}>
        <ControlContainer10 />
      </div>
      <SpeechRecognitionArea />
    </>
  );
}
