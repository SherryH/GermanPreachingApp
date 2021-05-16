import { useState } from 'react';
import { AnswerArea } from './AnswerArea';
import { TriggerArea } from './TriggerArea';
import { verbData, objectData } from '../../data/lesson4';
import { Obj, Trigger } from '../../interfaces';

function getRandomIndex(len) {
  return Math.floor(Math.random() * len);
}

export const ControlContainer = () => {
  const [objects, setObjects] = useState<Obj[]>(
    objectData.slice(1, objectData.length)
  );
  const [trigger, setTrigger] = useState<Trigger>({
    verb: verbData[0],
    object: objectData[0],
  });
  const randomVerbIndex = getRandomIndex(verbData.length);
  const randomObjIndex = getRandomIndex(objects.length);

  const triggerAreaProps = {
    objects,
    setTrigger,
    setObjects,
    trigger,
    randomVerbIndex,
    randomObjIndex,
  };
  const answerAreaProps = {
    object: trigger.object,
    randomVerbIndex,
  };
  return (
    <>
      <TriggerArea {...triggerAreaProps} />
      <AnswerArea {...answerAreaProps} />
    </>
  );
};
