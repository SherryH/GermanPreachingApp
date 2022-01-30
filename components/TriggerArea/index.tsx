import { Dispatch, SetStateAction } from 'react';

import { TriggerAreaView } from './TriggerAreaView';
import { useTriggerArea } from './useTriggerArea';

export const TriggerArea = ({
  currentTriggerIndex,
  setCurrentTriggerIndex,
  triggers,
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
  triggers: string[];
};
