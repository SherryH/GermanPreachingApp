import { Verb, Obj } from '../interfaces';

export const verbData: Verb[] = [
  {
    original: 'nehmen',
    ich: 'nehme',
    du: 'nimmst',
  },
  {
    original: 'tragen',
    ich: 'trage',
    du: 'trägst',
  },
  { original: 'sehen', ich: 'sehe', du: 'siehst' },
  { original: 'haben', ich: 'habe', du: 'hast' },
];

export const objectData: Obj[] = [
  { name: 'Kaffee', type: 'm' },
  { name: 'Bad', type: 'n' },
  { name: 'Lampe', type: 'f' },
  { name: 'Stuhl', type: 'm' },
  { name: 'Regal', type: 'n' },
  { name: 'Brille', type: 'f' },
  { name: 'Boden', type: 'm' },
  { name: 'Handy', type: 'n' },
  { name: 'Pflanze', type: 'f' },
  { name: 'Auto', type: 'n' },
];

export const articles: Obj[] = [
  { name: 'einen', type: 'm' },
  { name: 'eine', type: 'f' },
  { name: 'ein', type: 'n' },
];

export const negateArticles: Obj[] = [
  { name: 'keinen', type: 'm' },
  { name: 'keine', type: 'f' },
  { name: 'kein', type: 'n' },
];

export const adjs: Obj[] = [
  { name: 'schönen', type: 'm' },
  { name: 'schöne', type: 'f' },
  { name: 'schönes', type: 'n' },
];
