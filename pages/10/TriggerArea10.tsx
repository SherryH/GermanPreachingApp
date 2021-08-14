import { Dispatch, SetStateAction } from 'react';

import styles from '../../components/ControlContainer/Controls.module.css';
import { useEffect } from 'react';
import { adjData, objectData } from '../../data/lesson10';

const TriggerArea10 = ({
  currentTriggerIndex,
  setCurrentTriggerIndex
}: Props) => {
  useEffect(() => {
    if (currentTriggerIndex === adjData.length) {
      alert(
        'Preaching Finished! Congrats! 👏👍🌟 \nPlease refresh the page to restart.'
      );
    }
  }, [currentTriggerIndex]);

  const generateTriggers = () => {
    setCurrentTriggerIndex(
      (currentTriggerIndex: number): number => currentTriggerIndex + 1
    );
  };
  const getAdj = () => {
    return adjData[currentTriggerIndex]?.name || '';
  };
  const getObject = () => {
    return objectData[currentTriggerIndex]?.name || '';
  };
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
        <p>{getObject()}</p>
        <p>{getAdj()}</p>
      </div>
    </>
  );
};

// types for using callbacks inside state setter
type Props = {
  currentTriggerIndex: number;
  setCurrentTriggerIndex: Dispatch<SetStateAction<number>>;
};

export default TriggerArea10;
