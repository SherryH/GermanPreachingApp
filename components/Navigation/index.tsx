import styles from './Navigation.module.css';
export const Navigation = () => {
  console.log('hi');

  return (
    <aside className={styles.sidebarWrapper}>
      <nav className={styles.navWrapper}>
        <ul className={styles.navItem}>
          <li>Lesson 4</li>
          <li>Lesson 10</li>
          <li>Lesson 14</li>
        </ul>
      </nav>
    </aside>
  );
};
