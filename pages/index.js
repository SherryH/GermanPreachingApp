import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import { ControlContainer } from '../components/ControlContainer.tsx';

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
        <h1 className={styles.title}>Lektion 4 Preaching Exercises</h1>

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
        <div className={styles.speechArea}>
          <textarea className={styles.textBox} contentEditable></textarea>
          <FontAwesomeIcon
            className={styles.mic}
            color="black"
            size="sm"
            icon={faMicrophone}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
