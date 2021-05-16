import styles from '../../styles/Controls.module.css';
import { verbData, articles, negateArticles, adjs } from '../../data/lesson4';
import { Obj, Verb } from '../../interfaces';

const getMatchedName = (array: Obj[], match: Obj) =>
  array.find((a) => a.type === match.type).name;

export const AnswerArea = ({ object, verb, randomVerbIndex }: Props) => {
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
  return (
    <>
      <button type="button" className={styles.button}>
        Answers
      </button>
      <div className={`${styles.card} ${styles.answerArea}`}>
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
  randomVerbIndex: number;
};
