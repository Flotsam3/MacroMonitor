import { useEffect } from "react";
import styles from "./OptionItem.module.scss";
import { getAllOptions } from "../../services/apt";

type OptionProps = {
    label:string,
    placeholder:string,
    value:number
}

export default function OptionItem({label, placeholder, value}: OptionProps) {
  useEffect(()=>{
    getOptions();
  },[]);

  const getOptions = async()=>{
    const optionsData = await getAllOptions();
    console.log({optionsData});
  };

  return (
    <div className={styles.valueWrapper}>
        <p>{label}</p>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder={placeholder} />
          <p>{value}</p>
        </div>
    </div>
  )
};
