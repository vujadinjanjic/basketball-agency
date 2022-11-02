import HeaderBar from "../HeaderBar/HeaderBar";
import styles from "./FirstHomeComponent.module.scss";

const FirstHomeComponent = () => {
  return (
    <div className={styles.container}>
      <HeaderBar />
      <div className={styles.content}>
        <span className={styles.title}>Lorem ipsum </span>
        <span className={styles.title}>placerat ornare</span>
        <span className={styles.text}>
          Morbi in sem quis dui placerat ornare. Morbi in sem quis dui placerat
          ornare.
        </span>
      </div>
      <span className={styles.button}>PONUDA</span>
    </div>
  );
};

export default FirstHomeComponent;
