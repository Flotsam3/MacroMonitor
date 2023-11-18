import styles from "./OptionItem.module.scss";

// export type InputOptionTypes = {
//   calories:number 
//   carbohydrates:number
//   fat:number
//   protein:number
//   saturatedFat:number
//   sugar:number
//   salt:number
// }

type OptionProps = {
  label:string
  placeholder:string
  gramValue:number | undefined
  value:string
  calculated?:number | string | undefined
  name:Nutrient
  onChangeHandler:(event: React.ChangeEvent<HTMLInputElement>) => void;
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

export default function OptionItem({label, placeholder, gramValue, value, calculated, name, onChangeHandler}: OptionProps) {
  return (
    <div className={styles.valueWrapper}>
        <p>{label}</p>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder={placeholder} name={name} value={value} onChange={onChangeHandler} />
          <p>{gramValue}</p>
          <p>{calculated}</p>
        </div>
    </div>
  )
};
