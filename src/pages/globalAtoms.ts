import { atom } from 'recoil';

const homeTitle = atom<string>({
  key: 'homeTitle',
  default: 'Next.js Boilerplate Presentation',
});

const homeDescription = atom<string>({
  key: 'homeDescription',
  default: 'Lorem ipsum',
});

export { homeTitle, homeDescription };
