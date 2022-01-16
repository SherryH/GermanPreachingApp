import Head from 'next/head';
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
    <main className={styles.main} {...rest}>
      {children}
    </main>
  </div>
);
