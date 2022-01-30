import { useState } from 'react';
import { ClientOnly } from '../../components/ClientOnly';
import { triggers } from '../../data/lesson14';
import { TriggerArea } from '../../components/TriggerArea';
import { AnswerArea } from '../../components/AnswerArea';

const ControlContainer14 = () => {
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState<number>(0);
  const areaProps = { currentTriggerIndex, setCurrentTriggerIndex, triggers };
  return (
    <ClientOnly>
      <TriggerArea {...areaProps} />
      <AnswerArea currentTriggerIndex={currentTriggerIndex} />
    </ClientOnly>
  );
};

export default ControlContainer14;
