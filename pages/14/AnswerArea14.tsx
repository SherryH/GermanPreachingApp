import { useState } from 'react';
import styles from '../../components/ControlContainer/Controls.module.css';
import { speak } from '../../components/ControlContainer/speechSynthesis';
import { triggers, answers } from '../../data/lesson14';
import { getMatchedName } from '../../utils';

const AnswerArea14 = ({ currentTriggerIndex }: Props) => {
  const answerSentences = answers[currentTriggerIndex];

  // --------------------

  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const buttonClickHandler = () => {
    setShowAnswer(!showAnswer);
  };
  const clickHandler = (e) => {
    const text = e.target.textContent;
    speak(text);
  };

  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={buttonClickHandler}
      >
        Answers
      </button>
      <div
        className={`${styles.card} ${styles.answerArea}`}
        style={{ visibility: showAnswer ? 'visible' : 'hidden' }}
        onClick={clickHandler}
      >
        {answerSentences.map((ans) => (
          <p>{ans}</p>
        ))}
      </div>
    </>
  );
};

type Props = {
  currentTriggerIndex: number;
};

export default AnswerArea14;
