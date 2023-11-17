import {useState} from "react";
import vector1 from "../assets/images/Vector_1.png";
import orange from "../assets/images/orange.png";
import dish from "../assets/images/balance-dish.png";
import styles from "./Balance.module.scss";
import Navigation from "../components/Organisms/Navigation";
import MacroCups from "../components/Organisms/MacroCups";
import ConsumptionPanel from "../components/Organisms/ConsumptionPanel";
import Button from "../components/Atoms/Button";

export type MacroItem = {
  wrapperClass: "carbsWrapper" | "fatWrapper" | "proteinWrapper" | "saturatedFatWrapper" | "sugarWrapper" | "saltWrapper" | "caloriesWrapper"
  title: string
  amount: number
  percent: string
}

export type ConsumptionItem = {
  name: string
  grams: number
  kcal: number
  carbs: number
  fat: number
  protein: number
  satFat: number
  sugar: number
  salt: number
}

export default function Balance() {
  const [macroBalance, setMacroBalance] = useState<MacroItem[]>([{wrapperClass: "carbsWrapper", title: "Carbs", amount:450, percent:"95%"},{wrapperClass: "fatWrapper", title: "Fat", amount:450, percent:"95%"},{wrapperClass: "proteinWrapper", title: "Protein", amount:450, percent:"95%"},{wrapperClass: "saturatedFatWrapper", title: "Sat. fat", amount:450, percent:"95%"},{wrapperClass: "sugarWrapper", title: "Sugar", amount:450, percent:"95%"},{wrapperClass: "saltWrapper", title: "Salt", amount:450, percent:"95%"},{wrapperClass: "caloriesWrapper", title: "Calories", amount:450, percent:"95%"}]);
  const [consumption, setConsumption] = useState<ConsumptionItem[]>([{name:"Apple", grams:85, kcal:120, carbs: 45, fat:2, protein:1, satFat:0, sugar:15, salt:1}])

  return (
    <>
    <div className={styles.balance}>
      <Navigation />
      <div className={styles.headerContainer}>
        <h1>Daily intake</h1>
        <div className={styles.buttonWrapper}>
          <Button label="Reset" appearance="typeA"/>
          <Button label="Archivate" appearance="typeB"><img src={orange} alt="orange" /></Button>
        </div>
        <img src={dish} alt="Dish on a plate" />
      </div>
      <img className={styles.vector1} src={vector1} alt="curved background" ></img>
      <div className={styles.infoCircle}>
        {macroBalance.map((obj, index)=>(
          <MacroCups key={index} data={obj}  />
        ))}
      </div>
    </div>
      <h2 className={styles.consumption}>Consumption</h2>
      {consumption.map((obj, index)=>(
        <ConsumptionPanel  key={index} data={obj}/>
      ))}
    </>
  )
}

