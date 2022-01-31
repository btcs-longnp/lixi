import { atom } from 'recoil';

const aboutTitle = atom<string>({
  key: 'aboutTitle',
  default: 'Lorem ipsum',
});

const aboutDescription = atom<string>({
  key: 'aboutDescription',
  default: 'Lorem ipsum',
});

export { aboutTitle, aboutDescription };
