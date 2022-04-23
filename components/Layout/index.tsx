import Head from 'next/head';
import { Navigation } from '../Navigation';
import { NavigationTop } from '../NavigationTop';
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
      <NavigationTop />
      <Navigation />
      <main className={styles.main} {...rest}>
        <>
          {children}
          <SpeechRecognitionArea />
        </>
      </main>
    </section>
    <footer>
      <a href="https://github.com/SherryH/GermanPreachingApp" target="_blank">
        Made with 🎤 by Sherry Hsu
      </a>
    </footer>
  </div>
);
