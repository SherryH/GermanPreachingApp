import { useState } from 'react';
import { speak } from '../../components/ControlContainer/speechSynthesis';

export const useAnswerArea = ({ answers, currentTriggerIndex }) => {
  const answerSentences = answers[currentTriggerIndex];

  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const buttonClickHandler = () => {
    setShowAnswer(!showAnswer);
  };
  const clickHandler = (e) => {
    const text = e.target.textContent;
    speak(text);
  };

  return { clickHandler, buttonClickHandler, showAnswer, answerSentences };
};
