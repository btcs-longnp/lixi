import { selector } from 'recoil';

import { homeTitle } from './globalAtoms';

const homeTitleUpperCase = selector({
  key: 'homeTitleUpperCase',
  get: ({ get }) => get(homeTitle).toUpperCase(),
});

export { homeTitleUpperCase };
