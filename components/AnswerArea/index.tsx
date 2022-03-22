import { AnswerAreaView } from './AnswerAreaView';
import { useAnswerArea } from './useAnswerArea';

export const AnswerArea = ({ currentTriggerIndex, answers }: Props) => {
  const { clickHandler, buttonClickHandler, showAnswer, answerSentences } =
    useAnswerArea({ answers, currentTriggerIndex });

  const answerAreaProps = {
    buttonClickHandler,
    clickHandler,
    answerSentences,
    showAnswer,
  };

  return <AnswerAreaView {...answerAreaProps} />;
};

type Props = {
  currentTriggerIndex: number;
  answers: string[][];
};
