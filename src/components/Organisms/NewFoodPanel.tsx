import {useContext} from "react";
import styles from "./NewFoodPanel.module.scss";
import MacronutrientInput from "../Molecules/MacronutrientInput";
import Button from "../Atoms/Button";
import { Nutrient } from "../Molecules/OptionItem";
import { createFood, getAllFood } from "../../services/api";
import { OptionContext } from "../../context/OptionContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type HandleCreateMenuType = () => void;

type NewFoodPanelProps = {
  handleCreateMenu: HandleCreateMenuType
};

export default function NewFoodPanel({handleCreateMenu}: NewFoodPanelProps): JSX.Element {
  const {setFoodData, inputValue, setInputValue} = useContext(OptionContext);
  
  function handleChange(evt:React.ChangeEvent<HTMLInputElement>){
    const name = evt.target.name;
    const value = evt.target.value;
    console.log({name, value});
    if (setInputValue){
      setInputValue((prevInputValue) => ({
        ...prevInputValue,
        [name]: value,
      }));
    }
  };

  async function handleAddToList(){
    if (inputValue && setInputValue){
      if (inputValue.name === "") return handleValidationError("Name cannot be empty!");
      if (inputValue.calories === "" || inputValue.carbohydrates === "" || inputValue.fat === "" || inputValue.protein === "" || inputValue.saturatedFat === "" || inputValue.sugar === "" || inputValue.salt === "") return handleValidationError("All fields must have a value!")
      console.log("passed validation");
      const response = await createFood(inputValue);
      setInputValue({name:"", calories:"", carbohydrates:"", fat:"", protein:"", saturatedFat:"", sugar:"", salt:""});
      const data = await getAllFood();
      if (setFoodData){
        setFoodData(data);
      };
      console.log({response});
    }
  };

  function handleValidationError(message:string){
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  

  return (
    <div className={styles.panelWrapper}>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>
      <h1>New Food Item</h1>
      <div className={styles.panel}>
          <div className={styles.nameWrapper}>
              <h4>{"Name"}</h4>
              <input type="text" name="name" value={inputValue?.name} onChange={handleChange}/>
          </div>
          <div className={styles.macrosWrapper}>
            <MacronutrientInput label={"Kcal"} name={Nutrient.Calories} value={inputValue?.calories || ""} onChangeHandler={handleChange} />
            <MacronutrientInput label={"Carbs"} name={Nutrient.Carbohydrates} value={inputValue?.carbohydrates || ""} onChangeHandler={handleChange}/>
            <MacronutrientInput label={"Fat"} name={Nutrient.Fat} value={inputValue?.fat || ""} onChangeHandler={handleChange}/>
            <MacronutrientInput label={"Protein"} name={Nutrient.Protein} value={inputValue?.protein || ""} onChangeHandler={handleChange}/>
            <MacronutrientInput label={"Sat.fat"} name={Nutrient.SaturatedFat} value={inputValue?.saturatedFat || ""} onChangeHandler={handleChange}/>
            <MacronutrientInput label={"Sugar"} name={Nutrient.Sugar} value={inputValue?.sugar || ""} onChangeHandler={handleChange}/>
            <MacronutrientInput label={"Salt"} name={Nutrient.Salt} value={inputValue?.salt || ""} onChangeHandler={handleChange}/>
          </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button label={"Add to list"} appearance={"typeA"} onClick={handleAddToList} />
        <Button label={"Create menu"} appearance={"typeB"} onClick={handleCreateMenu} />
      </div>
    </div>
  )
}
