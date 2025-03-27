import styles from '../../components/ControlContainer/Controls.module.css';

type AnswerAreaViewProps = {
  buttonClickHandler: () => void;
  clickHandler: (e) => void;
  answerSentences: string[];
  showAnswer: Boolean;
};

export const AnswerAreaView = ({
  buttonClickHandler,
  clickHandler,
  answerSentences,
  showAnswer,
}: AnswerAreaViewProps) => (
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
      {answerSentences?.map((ans) => (
        <p key={ans}>{ans}</p>
      ))}
    </div>
  </>
);
