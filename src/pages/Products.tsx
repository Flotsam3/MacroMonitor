import { useEffect, useContext } from "react";
import styles from "./Products.module.scss";
import Navigation from "../components/Organisms/Navigation";
import NewFoodPanel from "../components/Organisms/NewFoodPanel";
import Macronutrient from "../components/Molecules/Macronutrient";
import banana from "../assets/images/banane_1.png";
import { getAllOptions, createOptions } from "../services/api";
import { OptionContext } from "../context/OptionContext";

export type Options = {
  calories:number
  carbohydrates:number
  fat:number
  protein:number
  saturatedFat:number
  sugar:number
  salt:number
};

export default function Products() {
  const {options, setOptionsData} = useContext(OptionContext) || {};
  
  useEffect(()=>{
    const fetchOptions = async() =>{
      const initialFetch = await getAllOptions();
      if (setOptionsData) {
        if (initialFetch.length > 0){
          setOptionsData(()=>initialFetch[0]);
        } else {
          const optionsData = await createOptions({calories:2000});
          setOptionsData(()=> optionsData.data)
        }
      }
    };
    return ()=>{
      fetchOptions();
    };
  },[]);

  useEffect(()=>{
    console.log({options});
  },[options])
  return (
    <div className={styles.products}>
      <div className={styles.inputWrapper}>
        <Navigation />
        <NewFoodPanel />
        <img className={styles.banana} src={banana} alt="A half peeled banana" />
      </div>
        <div className={styles.productPanelWrapper}>
          <div className={styles.imageWrapper}>
            <p className={styles.image}></p>
            <p className={styles.title}>Apfel</p>
          </div>
          <Macronutrient label="Kcal" value={54}/>
          <Macronutrient label="Carbs" value={54}/>
          <Macronutrient label="Fat" value={54}/>
          <Macronutrient label="Protein" value={54}/>
          <Macronutrient label="Sat.Fat" value={54}/>
          <Macronutrient label="Sugar" value={54}/>
          <Macronutrient label="Salt" value={54}/>
          <div className={styles.gramsWrapper}>
            <p>g</p>
            <input type="text" />
          </div>
          <span className={styles.close}>x</span>
          <div className={styles.addButtonWrapper}>
            <button>+</button>
          </div>
        </div>
    </div>
  )
}

