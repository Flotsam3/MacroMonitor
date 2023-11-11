import styles from "../pages/Balance.module.scss";

export default function MacroCups({data}) {
  return (
   <div className={styles[data.class]}>
      <div className={styles.textWrapper}>
         <h3>{data.title}</h3>
         <span>{data.amount}</span>
      </div>
      <div className={styles.cupWrapper}>
         <div className={styles.textWrapper}>
            <span>{data.percent}</span>
         </div>
      </div>
   </div>
  )
}
