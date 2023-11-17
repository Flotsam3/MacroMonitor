import { useState, useContext } from "react";
import styles from "./Options.module.scss";
import Navigation from "../components/Organisms/Navigation";
import OptionItem from "../components/Molecules/OptionItem";
import Button from "../components/Atoms/Button";
import { OptionContext } from "../context/OptionContext";
import { InputOptionTypes } from "../components/Molecules/OptionItem";
import { Nutrient } from "../components/Molecules/OptionItem";

export default function Options() {
  const {options} = useContext(OptionContext);
  const [optionsInput, setOptionsInput] = useState<InputOptionTypes>({calories:0, carbohydrates:0, fat:0, protein:0, saturatedFat:0, sugar:0, salt:0});
  
  function handleClick(){
    console.log({optionsInput});
  }
  return (
    <div className={styles.options}>
        <div className={styles.navWrapper}>
            <Navigation />
        </div>
        <h1>Options</h1>
        <h2>Limit values</h2>
        <form>
          <OptionItem label="Calories" placeholder="g" name={Nutrient.Calories} gramValue={options?.calories} setOptionsInput={setOptionsInput}/>
          <OptionItem label="Carbohydrates"placeholder="%" name={Nutrient.Carbohydrates} gramValue={options?.carbohydrates} calculated={options?.calories && (options?.carbohydrates * 4 / options?.calories).toFixed(2)} setOptionsInput={setOptionsInput}/>
          <OptionItem label="Fat" placeholder="%" name={Nutrient.Fat} gramValue={options?.fat} calculated={options?.calories && (options?.fat * 9 / options?.calories).toFixed(2)} setOptionsInput={setOptionsInput}/>
          <OptionItem label="Protein" placeholder="%" name={Nutrient.Protein} gramValue={options?.protein} calculated={options?.calories && (options?.protein * 4 / options?.calories).toFixed(2)} setOptionsInput={setOptionsInput}/>
          <OptionItem label="Saturated fat" placeholder="%" name={Nutrient.SaturatedFat} gramValue={options?.saturatedFat} calculated={options?.calories && (options?.saturatedFat * 9 / options?.calories).toFixed(2)} setOptionsInput={setOptionsInput}/>
          <OptionItem label="Sugar" placeholder="%" name={Nutrient.Sugar} gramValue={options?.sugar} calculated={options?.calories && (options?.sugar * 4 / options?.calories).toFixed(2)} setOptionsInput={setOptionsInput}/>
          <OptionItem label="Salt" placeholder="g" name={Nutrient.Salt} gramValue={options?.salt} setOptionsInput={setOptionsInput}/>
          <div className={styles.buttonWrapper}>
              <Button label="Save" type="submit" appearance="typeB" onClick={handleClick}/>
          </div>
        </form>
    </div>
  )
}
