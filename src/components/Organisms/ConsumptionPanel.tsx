import styles from "./ConsumptionPanel.module.scss";
import Macronutrient from "../Molecules/Macronutrient";
import { Options } from "../../context/OptionContext";

type ConsumptionPanelProps = {
   data: Options;
   deleteItem:(arg0:string) => void
};

export default function ConsumptionPanel({data, deleteItem}:ConsumptionPanelProps) {
  return (
   <div className={styles.panelWrapper}>
      <div className={styles.panel}>
         <div className={styles.nameWrapper}>
            <h4>{data.name}</h4>
            <p>{data.grams}</p>
         </div>
         <div className={styles.macrosWrapper}>
            <Macronutrient label={"Kcal"} value={data.calories}/>
            <Macronutrient label={"Carbs"} value={data.carbohydrates}/>
            <Macronutrient label={"Fat"} value={data.fat}/>
            <Macronutrient label={"Protein"} value={data.protein}/>
            <Macronutrient label={"Sat.fat"} value={data.saturatedFat}/>
            <Macronutrient label={"Sugar"} value={data.sugar}/>
            <Macronutrient label={"Salt"} value={data.salt}/>
         </div>
         <span className={styles.close} onClick={()=>deleteItem(data._id || "")}>x</span>
      </div>
 </div>
  )
}
