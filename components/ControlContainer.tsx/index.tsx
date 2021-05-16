import { useEffect, useState } from 'react';
import cloneDeep from 'clone-deep';
import { AnswerArea } from './AnswerArea';
import { TriggerArea } from './TriggerArea';
import { verbData, objectData } from '../../data/lesson4';
import { Obj, Trigger, Verb } from '../../interfaces';
import { ClientOnly } from '../ClientOnly';

function getRandomIndex(len) {
  return Math.floor(Math.random() * len);
}

export function removeChosenObject(objects, index) {
  const newObjects = cloneDeep(objects);
  newObjects.splice(index, 1);
  return newObjects;
}

export const ControlContainer = () => {
  const [verbs, setVerbs] = useState<Verb[]>(verbData);
  const [objects, setObjects] = useState<Obj[]>(objectData);
  const [trigger, setTrigger] = useState<Trigger>(null);
  const randomVerbIndex = getRandomIndex(verbs?.length);
  console.log({ objects });
  const randomObjIndex = getRandomIndex(objects?.length);
  console.log('verbs[randomVerbIndex]', verbs[randomVerbIndex]);
  console.log({ randomObjIndex });
  console.log('objects[randomObjIndex]', objects[randomObjIndex]);
  useEffect(() => {
    setTrigger({
      verb: verbData[randomVerbIndex],
      object: objects[randomObjIndex],
    });
    setObjects(removeChosenObject(objects, randomObjIndex));
  }, []);

  const triggerAreaProps = {
    objects,
    setTrigger,
    setObjects,
    trigger,
    randomVerbIndex,
    randomObjIndex,
  };
  const answerAreaProps = {
    verb: trigger?.verb,
    object: trigger?.object,
    randomVerbIndex,
  };
  return (
    <ClientOnly>
      <TriggerArea {...triggerAreaProps} />
      <AnswerArea {...answerAreaProps} />
    </ClientOnly>
  );
};
