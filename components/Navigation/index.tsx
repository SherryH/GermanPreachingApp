import styles from './Navigation.module.css';
export const Navigation = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <aside className={styles.sidebarWrapper}>
      <nav className={styles.navWrapper}>
        <ul className={styles.navItem}>
          <li>
            <a href={`${window.location.origin}/4`}>Lesson 4 (broken)</a>
          </li>
          <li>
            <a href={`${window.location.origin}/10`}>Lesson 10</a>
          </li>
          <li>
            <a href={`${window.location.origin}/14`}>Lesson 14</a>
          </li>
          <li>
            <a href={`${window.location.origin}/15`}>Lesson 15</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
