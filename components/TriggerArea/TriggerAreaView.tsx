import styles from '../../components/ControlContainer/Controls.module.css';

type TriggerAreaViewType = {
  generateTriggers: () => void;
  currentTriggers: string;
};

export const TriggerAreaView = ({
  generateTriggers,
  currentTriggers,
}: TriggerAreaViewType) => {
  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={generateTriggers}
      >
        Trigger
      </button>
      <div className={styles.card}>
        <p>{currentTriggers}</p>
      </div>
    </>
  );
};
