import styles from "./MacroCups.module.scss";
import { MacroItem } from "../../pages/Balance";

type MacroCupsProps = {
   data: MacroItem;
};

export default function MacroCups({data}:MacroCupsProps) {
  return (
   <div className={styles[data.wrapperClass]}>
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
