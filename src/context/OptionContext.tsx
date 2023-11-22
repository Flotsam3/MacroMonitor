import {ReactNode, SetStateAction, Dispatch, createContext, useState} from "react";

export type Options = {
    _id?:string
    name?:string
    calories:number
    carbohydrates:number
    fat:number
    protein:number
    saturatedFat:number
    sugar:number
    salt:number
    grams?:number
};

export type InputValues = {
    name?:string
    calories:string
    carbohydrates:string
    fat:string
    protein:string
    saturatedFat:string
    sugar:string
    salt:string
}

type OptionsContext = {
    options:Options
    setOptionsData:Dispatch<SetStateAction<Options>> // <Options> refers to the options field above
    food: Options[]
    setFoodData:Dispatch<SetStateAction<Options[]>>
    consumption:Options[]
    setConsumptionData:Dispatch<SetStateAction<Options[]>>
    inputValue:InputValues
    setInputValue:Dispatch<SetStateAction<InputValues>>
};

type OptionProvideProps = {
    children:ReactNode
};

export const OptionContext = createContext<Partial<OptionsContext>>({});


export default function OptionsProvider({children}:OptionProvideProps){
    const [optionsData, setOptionsData] = useState<Options>({_id: "", calories:0, carbohydrates:0, fat:0, protein:0, saturatedFat:0, sugar:0, salt:0});
    const [foodData, setFoodData] = useState<Options[]>([]);
    const [consumptionData, setConsumptionData] = useState<Options[]>([]);
    const [inputValue, setInputValue] = useState<InputValues>({name:"", calories:"", carbohydrates:"", fat:"", protein:"", saturatedFat:"", sugar:"", salt:""})
    return (
        <OptionContext.Provider value={{options:optionsData, setOptionsData, food:foodData, setFoodData, consumption:consumptionData, setConsumptionData, inputValue, setInputValue}}>
        {children}
        </OptionContext.Provider>
    )
};