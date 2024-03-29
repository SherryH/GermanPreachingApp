import Head from 'next/head';
import { Navigation } from '../Navigation';
import { SpeechRecognitionArea } from '../SpeechRecognitionArea';
import styles from './Layout.module.css';
export const Layout = ({ children, ...rest }) => (
  <div className={styles.container}>
    <Head>
      <title>Smarter German Preaching App</title>
      <meta
        name="description"
        content="Practising Preaching for SmarterGerman Course"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className={styles.mainSection}>
      <Navigation />
      <main className={styles.main} {...rest}>
        <div className={styles.contentSection}>
          {children}
          <SpeechRecognitionArea />
          <footer className={styles.footer}>
            <a
              href="https://github.com/SherryH/GermanPreachingApp"
              target="_blank"
            >
              Made with 🎤 by Sherry Hsu
            </a>
          </footer>
        </div>
      </main>
    </section>
  </div>
);
