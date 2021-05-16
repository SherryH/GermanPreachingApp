import styles from './SpeechArea.module.css';
export const MirrorArea = ({ mirrorArea }) => {
  console.log('&&&&&&');

  console.log({ mirrorArea });
  // if (mirrorArea === '') return null;
  return <div className={styles.mirrorArea}>{mirrorArea}</div>;
};
