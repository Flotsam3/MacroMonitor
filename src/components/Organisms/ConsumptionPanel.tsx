import styles from "./ConsumptionPanel.module.scss";
import Macronutrient from "../Molecules/Macronutrient";
import { ConsumptionItem } from "../../pages/Balance";

type ConsumptionPanelProps = {
   data: ConsumptionItem;
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
            <Macronutrient label={"Kcal"} value={data.kcal}/>
            <Macronutrient label={"Carbs"} value={data.carbs}/>
            <Macronutrient label={"Fat"} value={data.fat}/>
            <Macronutrient label={"Protein"} value={data.protein}/>
            <Macronutrient label={"Sat.fat"} value={data.satFat}/>
            <Macronutrient label={"Sugar"} value={data.sugar}/>
            <Macronutrient label={"Salt"} value={data.salt}/>
         </div>
         <span className={styles.close}>x</span>
      </div>
 </div>
  )
}
