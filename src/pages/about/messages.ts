import { defineMessages } from 'react-intl';

export const scope = 'app.pages.about';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'title',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'description',
  },
  aboutContent: {
    id: `${scope}.aboutContent`,
    defaultMessage: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
    recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
    labore voluptatibus distinctio recusandae autem esse explicabo molestias
    officia placeat, accusamus aut saepe.`,
  },
  aboutContent2: {
    id: `${scope}.aboutContent2`,
    defaultMessage: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
    recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
    labore voluptatibus distinctio recusandae autem esse explicabo molestias
    officia placeat, accusamus aut saepe.`,
  },
});
