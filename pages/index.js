import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ControlContainer } from '../components/ControlContainer';
import { SpeechRecognitionArea } from '../components/SpeechRecognitionArea';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smarter German Preaching App</title>
        <meta
          name="description"
          content="Practising Preaching for SmarterGerman Course"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lektion 4 Preaching Exercise</h1>

        <p className={styles.description}>
          0. Please use Chrome browser for the best experience
        </p>
        <p className={styles.description}>
          1. Click "Trigger" to get a random combination of preaching vocabs
        </p>
        <p className={styles.description}>
          2.Click on the 🎤 to say out loud the preaching sentences using
          triggers
        </p>
        <p className={styles.description}>
          3. Observe the transcribed sentences
        </p>
        <p className={styles.description}>
          4. Click on "Answers" to see answers and compare
        </p>
        <p className={styles.description}>
          5. Click on the provided answers and listen to the correct
          pronounciation
        </p>

        <div className={styles.controlWrapper}>
          <ControlContainer />
        </div>
        <SpeechRecognitionArea />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/SherryH/GermanPreachingApp" target="_blank">
          Made with 🎤 by Sherry Hsu
        </a>
      </footer>
    </div>
  );
}
