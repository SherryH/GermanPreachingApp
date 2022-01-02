import { useState } from 'react';
import { ClientOnly } from '../../components/ClientOnly';
import AnswerArea14 from './AnswerArea14';
import TriggerArea14 from './TriggerArea14';

const ControlContainer14 = () => {
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState<number>(0);
  const areaProps = { currentTriggerIndex, setCurrentTriggerIndex };
  return (
    <ClientOnly>
      <TriggerArea14 {...areaProps} />
      <AnswerArea14 currentTriggerIndex={currentTriggerIndex} />
    </ClientOnly>
  );
};

export default ControlContainer14;
