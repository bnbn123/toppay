import '../styles/styles.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);