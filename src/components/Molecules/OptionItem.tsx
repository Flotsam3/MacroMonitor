import { useState } from "react";
import styles from "./OptionItem.module.scss";

export type InputOptionTypes = {
  calories:number | string
  carbohydrates:number | string
  fat:number | string
  protein:number | string
  saturatedFat:number | string
  sugar:number | string
  salt:number | string
}

type OptionProps = {
  label:string
  placeholder:string
  gramValue:number | undefined
  calculated?:number | string | undefined
  name:Nutrient
  setOptionsInput:React.Dispatch<React.SetStateAction<InputOptionTypes>>
}

export enum Nutrient {
  Calories = "calories",
  Carbohydrates = "carbohydrates",
  Fat = "fat",
  Protein = "protein",
  SaturatedFat = "saturatedFat",
  Sugar = "sugar",
  Salt = "salt"
}

export default function OptionItem({label, placeholder, gramValue, calculated, name, setOptionsInput}: OptionProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    setOptionsInput((prevValues) => ({
      ...prevValues,
      [name]: evt.target.value,
    }))
  }
  return (
    <div className={styles.valueWrapper}>
        <p>{label}</p>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder={placeholder} name={name} value={inputValue} onChange={(evt)=>handleInput(evt)} />
          <p>{gramValue}</p>
          <p>{calculated}</p>
        </div>
    </div>
  )
};
