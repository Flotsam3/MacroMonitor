import {useState, useEffect, useContext} from "react";
import vector1 from "../assets/images/Vector_1.png";
import orange from "../assets/images/orange.png";
import dish from "../assets/images/balance-dish.png";
import styles from "./Balance.module.scss";
import Navigation from "../components/Organisms/Navigation";
import MacroCups from "../components/Organisms/MacroCups";
import ConsumptionPanel from "../components/Organisms/ConsumptionPanel";
import Button from "../components/Atoms/Button";
import { OptionContext } from "../context/OptionContext";
import { getConsumption, deleteConsumptionItem, deleteConsumption, getAllOptions, createOptions } from "../services/api";

export type MacroItem = {
  wrapperClass: "carbsWrapper" | "fatWrapper" | "proteinWrapper" | "saturatedFatWrapper" | "sugarWrapper" | "saltWrapper" | "caloriesWrapper"
  title: string
  amount: number
  percent: string
};

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
};

export default function Balance() {
  const {consumption, setConsumptionData, options, setOptionsData} = useContext(OptionContext) || [];
  const [macroBalance, setMacroBalance] = useState<MacroItem[]>([{wrapperClass: "carbsWrapper", title: "Carbs", amount:450, percent:"95%"},{wrapperClass: "fatWrapper", title: "Fat", amount:450, percent:"95%"},{wrapperClass: "proteinWrapper", title: "Protein", amount:450, percent:"95%"},{wrapperClass: "saturatedFatWrapper", title: "Sat. fat", amount:450, percent:"95%"},{wrapperClass: "sugarWrapper", title: "Sugar", amount:450, percent:"95%"},{wrapperClass: "saltWrapper", title: "Salt", amount:450, percent:"95%"},{wrapperClass: "caloriesWrapper", title: "Calories", amount:450, percent:"95%"}]);

  useEffect(()=>{
    const fetchOptions = async() =>{
      const initialFetch = await getAllOptions();
      if (setOptionsData) {
        if (initialFetch.length > 0){
          setOptionsData(()=>initialFetch[0]);
        } else {
          const optionsData = await createOptions({calories:2000});
          setOptionsData(()=> optionsData.data)
        };
      };
    };

    const getData = async()=>{
      const consumptionData = await getConsumption();
      if (setConsumptionData){
        setConsumptionData(consumptionData);
      };
    };
    return ()=>{
      fetchOptions();
      getData();
    };
  },[]);

  useEffect(()=>{
    
    return ()=>{
      console.log("updated");
      calculateBalance();
    }
  },[options, consumption]);
  
  async function deleteOneConsumptionItem(id:string){
    await deleteConsumptionItem(id);
    const consumptionData = await getConsumption();
    if (setConsumptionData){
      setConsumptionData(consumptionData);
    };
  };

  function calculateBalance(){
    const summerizedValues = {calories:0, carbohydrates:0, fat:0, protein:0, saturatedFat:0, sugar:0, salt:0};
    const _macroBalance = macroBalance;

    consumption?.forEach((obj)=>{
      summerizedValues.calories += +obj.calories;
        summerizedValues.carbohydrates += +obj.carbohydrates;
        summerizedValues.fat += +obj.fat;
        summerizedValues.protein += +obj.protein;
        summerizedValues.saturatedFat += +obj.saturatedFat;
        summerizedValues.sugar += +obj.sugar;
        summerizedValues.salt += +obj.salt;
    });
    if (options){
      const balanceData = {calories:Math.round(summerizedValues.calories * 100 / options?.calories), carbohydrates:Math.round(summerizedValues.carbohydrates * 100 / options?.carbohydrates), fat:Math.round(summerizedValues.fat * 100 / options?.fat), protein:Math.round(summerizedValues.protein * 100 / options?.protein), saturatedFat:Math.round(summerizedValues.saturatedFat * 100 / options?.saturatedFat), sugar:Math.round(summerizedValues.sugar * 100 / options?.sugar), salt:Math.round(summerizedValues.salt * 100 / options?.salt)};
      console.log({summerizedValues, balanceData, options});

      _macroBalance[6].amount = summerizedValues.calories;
      _macroBalance[6].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.calories + "%";
      _macroBalance[0].amount = summerizedValues.carbohydrates;
      _macroBalance[0].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.carbohydrates + "%";
      _macroBalance[1].amount = summerizedValues.fat;
      _macroBalance[1].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.fat + "%";
      _macroBalance[2].amount = summerizedValues.protein;
      _macroBalance[2].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.protein + "%";
      _macroBalance[3].amount = summerizedValues.saturatedFat;
      _macroBalance[3].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.saturatedFat + "%";
      _macroBalance[4].amount = summerizedValues.sugar;
      _macroBalance[4].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.sugar + "%";
      _macroBalance[5].amount = summerizedValues.salt;
      _macroBalance[5].percent = isNaN(+balanceData.salt) ? "0%" : balanceData.salt + "%";

      setMacroBalance(()=>_macroBalance);
      console.log({macroBalance, _macroBalance});
      
    };
  };

  async function resetList(){
    await deleteConsumption();
    const consumptionData = await getConsumption();
    if (setConsumptionData){
      setConsumptionData(consumptionData);
    };
    calculateBalance();
  };

  return (
    <>
    <div className={styles.balance}>
      <Navigation />
      <div className={styles.headerContainer}>
        <h1>Daily intake</h1>
        <div className={styles.buttonWrapper}>
          <Button label="Reset" onClick={resetList} appearance="typeA"/>
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
      <div className={styles.consumptionOuterWrapper}>
        {consumption && consumption.map((obj, index)=>(
          <ConsumptionPanel deleteItem={deleteOneConsumptionItem}  key={index} data={obj}/>
        ))};
      </div>
    </>
  )
}

