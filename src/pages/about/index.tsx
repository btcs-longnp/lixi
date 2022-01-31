import { FormattedMessage, useIntl } from 'react-intl';
import { useRecoilState } from 'recoil';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { aboutTitle } from './atoms';
import messages from './messages';

const About = () => {
  const [description] = useRecoilState(aboutTitle);
  const { formatMessage } = useIntl();

  return (
    <Main
      meta={
        <Meta title={formatMessage(messages.title)} description={description} />
      }
    >
      <p>
        <FormattedMessage {...messages.aboutContent} />
      </p>
      <p>
        <FormattedMessage {...messages.aboutContent2} />
      </p>
    </Main>
  );
};

export default About;
