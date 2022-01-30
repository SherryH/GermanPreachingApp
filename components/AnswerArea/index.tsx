import { answers } from '../../data/lesson14';
import { AnswerAreaView } from './AnswerAreaView';
import { useAnswerArea } from './useAnswerArea';

export const AnswerArea = ({ currentTriggerIndex }: Props) => {
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
};
