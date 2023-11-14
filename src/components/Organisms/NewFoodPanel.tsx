import styles from "./NewFoodPanel.module.scss";
import MacronutrientInput from "../Molecules/MacronutrientInput";
import Button from "../Atoms/Button";

export default function NewFoodPanel() {

  return (
    <div className={styles.panelWrapper}>
      <h1>New Food Item</h1>
      <div className={styles.panel}>
          <div className={styles.nameWrapper}>
              <h4>{"Name"}</h4>
              <input type="text"/>
          </div>
          <div className={styles.macrosWrapper}>
            <MacronutrientInput label={"Kcal"} />
            <MacronutrientInput label={"Carbs"} />
            <MacronutrientInput label={"Fat"} />
            <MacronutrientInput label={"Protein"} />
            <MacronutrientInput label={"Sat.fat"} />
            <MacronutrientInput label={"Sugar"} />
            <MacronutrientInput label={"Salt"} />
          </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button label={"Add to list"} type={"typeA"} />
        <Button label={"Create menu"} type={"typeB"} />
      </div>
    </div>
  )
}
