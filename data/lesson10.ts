import { Verb, Obj } from '../interfaces';

export const objectData: Obj[] = [
  { name: 'Hund', type: 'm' },
  { name: 'Kino', type: 'n' },
  { name: 'Bäckerei', type: 'f' },
  { name: 'Künstlerin', type: 'f' },
  { name: 'Haus', type: 'n' },
  { name: 'Mann', type: 'm' },
  { name: 'Katze', type: 'f' },
  { name: 'Musiker', type: 'm' },
  { name: 'Gebäude', type: 'n' },
  { name: 'Park', type: 'm' },
];

export const adjData: Obj[] = [
  { name: 'süß', type: 'm' },
  { name: 'alt', type: 'n' },
  { name: 'neu', type: 'f' },
  { name: 'talentiert', type: 'f' },
  { name: 'besetzt', type: 'f' },
  { name: 'verrückt', type: 'm' },
  { name: 'verschmust', type: 'f' },
  { name: 'toll', type: 'm' },
  { name: 'modern', type: 'n' },
  { name: 'schön', type: 'm' },
];

export const accusativeArticles: Obj[] = [
  { name: 'den', type: 'm' },
  { name: 'das', type: 'n' },
  { name: 'die', type: 'f' },
];

export const whichs: Obj[] = [
  { name: 'welchen', type: 'm' },
  { name: 'welches', type: 'n' },
  { name: 'welche', type: 'f' },
];
