import styles from "./MacroCups.module.scss";
import { MacroItem } from "../../pages/Balance";

type MacroCupsProps = {
   data: MacroItem;
};

export default function MacroCups({data}:MacroCupsProps) {
   const calculateCupClass = () => {
      const percent = +data.percent.slice(0, -1);
      console.log(percent > 89);
      
      switch (true) {
         case (percent > 89 && percent < 101): return styles.cupGreen
            break;
         case (percent > 100 && percent < 111): return styles.cupYellow
            break;
         case percent > 110: return styles.cupRed
            break;
         default: return ""
            break;
      }
   };

  return (
   <div className={styles[data.wrapperClass]}>
      <div className={styles.textWrapper}>
         <h3>{data.title}</h3>
         <span>{data.amount}</span>
      </div>
      <div className={`${styles.cupWrapper} ${calculateCupClass()}`}>
         <div className={styles.textWrapper}>
            <span>{data.percent}</span>
         </div>
      </div>
   </div>
  )
}
