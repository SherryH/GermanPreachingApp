import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { Layout } from '../components/Layout';
import { GlobalStyles, bp, maxWidth, minWidth } from '../styles';

function MyApp({ Component, pageProps }) {
  const theme = { bp, maxWidth, minWidth };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
