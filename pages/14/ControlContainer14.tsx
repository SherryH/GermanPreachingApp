import { useState } from 'react';
import { ClientOnly } from '../../components/ClientOnly';
import AnswerArea14 from './AnswerArea14';
import { triggers } from '../../data/lesson14';
import { TriggerArea } from '../../components/TriggerArea';

const ControlContainer14 = () => {
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState<number>(0);
  const areaProps = { currentTriggerIndex, setCurrentTriggerIndex, triggers };
  return (
    <ClientOnly>
      <TriggerArea {...areaProps} />
      <AnswerArea14 currentTriggerIndex={currentTriggerIndex} />
    </ClientOnly>
  );
};

export default ControlContainer14;
