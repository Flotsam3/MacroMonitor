import styles from "./MacroDataMobile.module.scss";

export default function MacroDataMobile() {
  return (
    <div className={styles.dataWrapper}>
        <span className={styles.percent}>105%</span>
        <div className={styles.cup}></div>
        <p className={styles.title}>Carbs</p>
        <span className={styles.amount}>2000</span>
    </div>
  )
};
