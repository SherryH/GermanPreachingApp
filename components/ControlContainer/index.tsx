import { useEffect, useState } from 'react';
import { AnswerArea } from './AnswerArea';
import { TriggerArea } from './TriggerArea';
import { verbData, objectData } from '../../data/lesson4';
import { Obj, Trigger, Verb } from '../../interfaces';
import { ClientOnly } from '../ClientOnly';
import { getRandomIndex, removeChosenObject } from '../../utils';

export const ControlContainer = () => {
  const [verbs, setVerbs] = useState<Verb[]>(verbData);
  const [objects, setObjects] = useState<Obj[]>(objectData);
  const [trigger, setTrigger] = useState<Trigger>(null);
  const randomVerbIndex = getRandomIndex(verbs?.length);
  const randomObjIndex = getRandomIndex(objects?.length);

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
