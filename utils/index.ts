import cloneDeep from 'clone-deep';

export function removeChosenObject(objects, index) {
  const newObjects = cloneDeep(objects);
  newObjects.splice(index, 1);
  return newObjects;
}

export function getRandomIndex(len) {
  return Math.floor(Math.random() * len);
}
