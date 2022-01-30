import { useEffect, Dispatch, SetStateAction } from 'react';

import styles from '../../components/ControlContainer/Controls.module.css';
import { triggers } from '../../data/lesson14';
import { TriggerAreaView } from './TriggerAreaView';
import { useTriggerArea } from './useTriggerArea';

const TriggerArea14 = ({
  currentTriggerIndex,
  setCurrentTriggerIndex,
}: Props) => {
  const { generateTriggers, currentTriggers } = useTriggerArea({
    currentTriggerIndex,
    setCurrentTriggerIndex,
    triggers,
  });
  return (
    <TriggerAreaView
      generateTriggers={generateTriggers}
      currentTriggers={currentTriggers}
    />
  );
};

// types for using callbacks inside state setter
type Props = {
  currentTriggerIndex: number;
  setCurrentTriggerIndex: Dispatch<SetStateAction<number>>;
};

export default TriggerArea14;
