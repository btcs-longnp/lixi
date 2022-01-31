import { selector } from 'recoil';

import { aboutTitle } from './atoms';

const aboutTitleUpperCase = selector({
  key: 'aboutTitleUpperCase',
  get: ({ get }) => get(aboutTitle).toUpperCase(),
});

export { aboutTitleUpperCase };
