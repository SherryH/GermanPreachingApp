import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation';
import { SpeechRecognitionArea } from '../SpeechRecognitionArea';
import styles from './Layout.module.css';
import { bp } from '../../styles';

export const Layout = ({ children, ...rest }) => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(true);

  useEffect(() => {
    if (window.innerWidth < parseInt(bp.md.replace('px', ''))) {
      setShowMobileSideNav(false);
    }
  }, []);

  const toggleSidebar = () => {
    setShowMobileSideNav((isVisible) => !isVisible);
  };

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
      <section
        className={`${styles.mainSection} ${
          !showMobileSideNav ? styles.sidebarHidden : ''
        }`}
      >
        <Navigation
          onSidebarToggle={toggleSidebar}
          showMobileSideNav={showMobileSideNav}
        />
        <main className={styles.main} {...rest}>
          <>
            {children}
            <SpeechRecognitionArea />
          </>
          <footer>
            <a
              href="https://github.com/SherryH/GermanPreachingApp"
              target="_blank"
            >
              Made with 🎤 by Sherry Hsu
            </a>
          </footer>
        </main>
      </section>
    </div>
  );
};
