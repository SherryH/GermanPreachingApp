import { useEffect } from 'react';

export const useTriggerArea = ({
  currentTriggerIndex,
  setCurrentTriggerIndex,
  triggers,
}) => {
  useEffect(() => {
    if (currentTriggerIndex === triggers.length) {
      alert(
        'Preaching Finished! Congrats! 👏👍🌟 \nPlease refresh the page to restart.'
      );
    }
  }, [currentTriggerIndex]);

  const generateTriggers = () => {
    if (currentTriggerIndex === triggers.length) return;
    setCurrentTriggerIndex(
      (currentTriggerIndex: number): number => currentTriggerIndex + 1
    );
  };
  const currentTriggers = triggers[currentTriggerIndex];
  return { currentTriggers, generateTriggers };
};
