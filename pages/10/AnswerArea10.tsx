import { useState } from 'react';
import styles from '../../components/ControlContainer/Controls.module.css';
import { speak } from '../../components/ControlContainer/speechSynthesis';
import {
  accusativeArticles,
  adjData,
  objectData,
  whichs
} from '../../data/lesson10';
import { getMatchedName } from '../../utils';

const AnswerArea10 = ({ currentTriggerIndex }: Props) => {
  // -- create a hook ---
  // from currentTriggerIndex to get the current triggers
  // construct the answers from the triggers
  const object = objectData[currentTriggerIndex];
  const normalAdj = adjData[currentTriggerIndex];
  const adj =
    normalAdj?.type === 'm' ? `${normalAdj?.name}en` : `${normalAdj?.name}e`;
  const objectName = object?.name;

  const accusativeArticle = getMatchedName(accusativeArticles, object);
  const which = getMatchedName(whichs, object);

  const ans1 = `Siehst du ${accusativeArticle} ${adj} ${objectName}?`;
  console.log(ans1);
  const ans2 = `${which} ${adj} ${objectName}?`;
  const ans3 = `${accusativeArticle} da drüben.`;
  const ans4 = `Ach ${accusativeArticle}! Na klar sehe ich ${accusativeArticle}.`;

  // --------------------

  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const buttonClickHandler = () => {
    setShowAnswer(!showAnswer);
  };
  const clickHandler = e => {
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
        <p>{ans1}</p>
        <p>{ans2}</p>
        <p>{ans3}</p>
        <p>{ans4}</p>
      </div>
    </>
  );
};

type Props = {
  currentTriggerIndex: number;
};

export default AnswerArea10;
