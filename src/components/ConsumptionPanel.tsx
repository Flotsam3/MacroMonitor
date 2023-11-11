import styles from "../pages/Balance.module.scss";

interface ConsumptionPanelProps {
   data: {
     name: string;
     grams: number;
     kcal: number;
     carbs: number;
     fat: number;
     protein: number;
     satFat: number;
     sugar: number;
     salt: number;
   };
};

export default function ConsumptionPanel({data}:ConsumptionPanelProps) {
  return (
   <div className={styles.panelWrapper}>
      <div className={styles.panel}>
         <div className={styles.nameWrapper}>
            <h4>{data.name}</h4>
            <p>{data.grams}</p>
         </div>
         <div className={styles.macrosWrapper}>
            <div className={styles.singleMacroWrapper}>
               <h5>Kcal</h5>
               <p>{data.kcal}</p>
            </div>
            <div className={styles.singleMacroWrapper}>
               <h5>Carbs</h5>
               <p>{data.carbs}</p>
            </div>
            <div className={styles.singleMacroWrapper}>
               <h5>Fat</h5>
               <p>{data.fat}</p>
            </div>
            <div className={styles.singleMacroWrapper}>
               <h5>Protein</h5>
               <p>{data.protein}</p>
            </div>
            <div className={styles.singleMacroWrapper}>
               <h5>Sat. fat</h5>
               <p>{data.satFat}</p>
            </div>
            <div className={styles.singleMacroWrapper}>
               <h5>Sugar</h5>
               <p>{data.sugar}</p>
            </div>
            <div className={styles.singleMacroWrapper}>
               <h5>Salt</h5>
               <p>{data.salt}</p>
            </div>
         </div>
         <span className={styles.close}>x</span>
      </div>
 </div>
  )
}
