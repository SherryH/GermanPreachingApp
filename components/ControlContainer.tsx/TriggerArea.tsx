import { Dispatch } from 'react';
import { verbData } from '../../data/lesson4';
import { Obj, Trigger } from '../../interfaces';
import styles from '../../styles/Controls.module.css';

export function TriggerArea({
  objects,
  setTrigger,
  setObjects,
  trigger,
  randomVerbIndex,
  randomObjIndex,
}: Props) {
  const handleClick = () => {
    if (objects.length === 0) {
      alert(
        'Preaching Finished! Congrats! 👏👍🌟 \nPlease refresh the page to restart.'
      );
    } else {
      setTrigger({
        verb: verbData[randomVerbIndex],
        object: objects[randomObjIndex],
      });
    }

    const newObjects = objects.slice();
    newObjects.splice(randomObjIndex, 1);
    setObjects(newObjects);
  };

  return (
    <>
      <button type="button" className={styles.button} onClick={handleClick}>
        Trigger
      </button>
      <div className={styles.card}>
        <p>{trigger.verb.original}</p>
        <p>{trigger.object.name}</p>
      </div>
    </>
  );
}

type Props = {
  objects: Obj[];
  setTrigger: Dispatch<Trigger>;
  setObjects: Dispatch<Obj[]>;
  trigger: Trigger;
  randomVerbIndex: number;
  randomObjIndex: number;
};
