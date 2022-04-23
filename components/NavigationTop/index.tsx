import styles from './NavigationTop.module.css';
import { HamburgerIcon } from '../Icon/HamburgerIcon';
export const NavigationTop = () => (
  <div className={styles.container}>
    <div className={styles.hamburgerWrapper}>
      <HamburgerIcon />
    </div>
  </div>
);
