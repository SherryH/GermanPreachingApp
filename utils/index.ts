import cloneDeep from 'clone-deep';
import { Obj } from '../interfaces';

export function removeChosenObject(objects, index) {
  const newObjects = cloneDeep(objects);
  newObjects.splice(index, 1);
  return newObjects;
}

export function getRandomIndex(len) {
  return Math.floor(Math.random() * len);
}

export const getMatchedName = (array: Obj[], match: Obj) =>
  array.find((a) => a.type === match.type).name;
