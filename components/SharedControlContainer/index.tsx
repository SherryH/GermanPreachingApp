import { useState } from 'react';
import { ClientOnly } from '../../components/ClientOnly';
import { TriggerArea } from '../../components/TriggerArea';
import { AnswerArea } from '../../components/AnswerArea';

export const SharedControlContainer = ({ triggers }) => {
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState<number>(0);
  const areaProps = { currentTriggerIndex, setCurrentTriggerIndex, triggers };
  return (
    <ClientOnly>
      <TriggerArea {...areaProps} />
      <AnswerArea currentTriggerIndex={currentTriggerIndex} />
    </ClientOnly>
  );
};
