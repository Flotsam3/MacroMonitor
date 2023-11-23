import {useContext} from "react";
import Navigation from "../components/Organisms/Navigation";
import styles from "./Archive.module.scss";
import Button from "../components/Atoms/Button";
import Macronutrient from "../components/Molecules/Macronutrient";
import pasta from "../assets/images/nudeln_1.png"
import { OptionContext } from "../context/OptionContext";

export default function Archive() {
  const {archive, setArchive} = useContext(OptionContext) || [];
  return (
      <div className={styles.archive}>
        <div className={styles.archiveHeader}>
          <img src={pasta} alt="A plate with uncooked pasta" />
        </div>
        <Navigation />
        <h1>Archive</h1>
        <div className={styles.buttonWrapper}>
          <Button label="Reset" appearance="typeA" />
        </div>
        <div className={styles.outerPanelWrapper}>
          {archive?.map((obj, index)=>(
            <div key={index} className={styles.panelWrapper}>
              <div className={styles.dateWrapper}>
                <p className={styles.date}>01.08.2023</p>
                <p className={styles.grams}>{obj.grams}</p>
              </div>
                <Macronutrient label="Kcal" value={obj.calories} />
                <Macronutrient label="Carbs" value={obj.carbohydrates} />
                <Macronutrient label="Fat" value={obj.fat} />
                <Macronutrient label="Protein" value={obj.protein} />
                <Macronutrient label="Sat.fat" value={obj.saturatedFat} />
                <Macronutrient label="Sugar" value={obj.sugar} />
                <Macronutrient label="Salt" value={obj.salt} />
                <span className={styles.close}>x</span>
            </div>
          ))}
        </div>
      </div>
  )
};
