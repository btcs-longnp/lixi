import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { RecoilRoot } from 'recoil';

import messagesInEnglish from '../lang/en.json';
import messagesInJapanese from '../lang/ja.json';
import { getKeyValue } from '../utils/typeHelper';
import '../styles/global.css';
import '../styles/ant.css';

interface Messages {
  ja: Record<string, string>;
  en: Record<string, string>;
}

const messages: Messages = {
  ja: messagesInJapanese,
  en: messagesInEnglish,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { locale } = router;
  const message = getKeyValue<keyof Messages, Messages>(locale as any)(
    messages,
  );

  return (
    <RecoilRoot>
      <IntlProvider
        messages={message}
        locale={locale || 'ja'}
        defaultLocale="ja"
      >
        <Component {...pageProps} />
      </IntlProvider>
    </RecoilRoot>
  );
};

export default MyApp;
