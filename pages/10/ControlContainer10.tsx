import { useState } from 'react';
import { ClientOnly } from '../../components/ClientOnly';
import AnswerArea10 from './AnswerArea10';
import TriggerArea10 from './TriggerArea10';

const ControlContainer10 = () => {
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState<number>(0);
  const areaProps = { currentTriggerIndex, setCurrentTriggerIndex };
  return (
    <ClientOnly>
      <TriggerArea10 {...areaProps} />
      <AnswerArea10 currentTriggerIndex={currentTriggerIndex} />
    </ClientOnly>
  );
};

export default ControlContainer10;
