import styles from './SpeechArea.module.css';
export const MirrorArea = ({ mirrorArea }: Props) => {
  if (mirrorArea === '') return null;
  return <div className={styles.mirrorArea}>{mirrorArea}</div>;
};

type Props = {
  mirrorArea: string;
};
