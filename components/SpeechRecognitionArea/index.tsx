import styles from './SpeechArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useSpeechRecognition } from './useSpeechRecognition';
import { MirrorArea } from './MirrorArea';

export const SpeechRecognitionArea = () => {
  const {
    startTranscribing,
    isRecognising,
    setIsRecognising,
    speechArea,
    setSpeechArea,
    mirrorArea,
    stopTranscribing,
  } = useSpeechRecognition();
  // click on the mic, toggle color red,

  // //------
  // const [hasMounted, setHasMounted] = useState(false);
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) return null;

  // //---------

  const clickHandler = (e) => {
    e.preventDefault();
    const currentIsRecognisingState = isRecognising;
    if (currentIsRecognisingState) {
      stopTranscribing();
    } else {
      startTranscribing();
    }
    setIsRecognising(!currentIsRecognisingState);
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
