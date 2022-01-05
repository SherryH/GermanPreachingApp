import { Dispatch, SetStateAction } from 'react';

import styles from '../../components/ControlContainer/Controls.module.css';
import { useEffect } from 'react';
import { triggers } from '../../data/lesson14';

const TriggerArea14 = ({
  currentTriggerIndex,
  setCurrentTriggerIndex,
}: Props) => {
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
  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={generateTriggers}
      >
        Trigger
      </button>
      <div className={styles.card}>
        <p>{currentTriggers}</p>
      </div>
    </>
  );
};

// types for using callbacks inside state setter
type Props = {
  currentTriggerIndex: number;
  setCurrentTriggerIndex: Dispatch<SetStateAction<number>>;
};

export default TriggerArea14;
