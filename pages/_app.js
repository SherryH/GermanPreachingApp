import '../styles/globals.css';
import { Layout } from '../components/Layout';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
