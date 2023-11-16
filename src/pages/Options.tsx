import { useEffect, useState } from "react";
import styles from "./Options.module.scss";
import Navigation from "../components/Organisms/Navigation";
import OptionItem from "../components/Molecules/OptionItem";
import Button from "../components/Atoms/Button";
import { getAllOptions, createOptions } from "../services/api";

const postOptions = async(payload:object)=>{
  await createOptions(payload);
};

const getOptions = async()=>{
  const optionsData = await getAllOptions();
  console.log({optionsData});
  if (optionsData.length === 0){
    const response = await postOptions({calories:2000});
    return console.log({response});
  }
};

export default function Options() {
  const [options, setOptions] = useState([])
  useEffect(() => {
     
  }, []);

  console.log("Options body");
  
  return (
    <div className={styles.options}>
        <div className={styles.navWrapper}>
            <Navigation />
        </div>
        <h1>Options</h1>
        <h2>Limit values</h2>
        <OptionItem label="Calories" placeholder="g" value={2000}/>
        <OptionItem label="Carbohydrates"placeholder="%" value={2000}/>
        <OptionItem label="Fat" placeholder="%" value={2000}/>
        <OptionItem label="Protein" placeholder="%" value={2000}/>
        <OptionItem label="Saturated fat" placeholder="%" value={2000}/>
        <OptionItem label="Sugar" placeholder="%" value={2000}/>
        <OptionItem label="Salt" placeholder="g" value={10}/>
        <div className={styles.buttonWrapper}>
            <Button label="Save" type="typeB"/>
        </div>
    </div>
  )
}
