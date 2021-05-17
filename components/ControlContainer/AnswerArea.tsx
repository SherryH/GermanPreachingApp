import styles from './Controls.module.css';
import { articles, negateArticles, adjs } from '../../data/lesson4';
import { Obj, Verb } from '../../interfaces';
import { speak } from './speechSynthesis';

const getMatchedName = (array: Obj[], match: Obj) =>
  array.find((a) => a.type === match.type).name;

export const AnswerArea = ({ object, verb }: Props) => {
  const ichVerb = verb.ich;
  const duVerb = verb.du;
  const article = getMatchedName(articles, object);
  const negate = getMatchedName(negateArticles, object);
  const adj = getMatchedName(adjs, object);
  const objectName = object.name;
  // construct the answer sentences model
  const ans1 = `Ich ${ichVerb} ${article} ${objectName}`;
  const ans2 = `Ich ${ichVerb} ${article} ${adj} ${objectName}`;
  const ans3 = `${duVerb} du auch ${article} ${adj} ${objectName}?`;
  const ans4 = `Ich ${ichVerb} ${negate} ${adj} ${objectName}`;

  //create speech synthesis
  const clickHandler = (e) => {
    const text = e.target.textContent;
    speak(text);
  };
  return (
    <>
      <button type="button" className={styles.button}>
        Answers
      </button>
      <div
        className={`${styles.card} ${styles.answerArea}`}
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
  object: Obj;
  verb: Verb;
};
