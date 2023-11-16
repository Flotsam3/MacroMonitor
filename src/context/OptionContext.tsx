import {ReactNode, SetStateAction, Dispatch, createContext, useState} from "react";

export type Options = {
    calories:number
    carbohydrates:number
    fat:number
    protein:number
    saturatedFat:number
    sugar:number
    salt:number
};

type OptionsContext = {
    options:Options
    setOptionsData:Dispatch<SetStateAction<Options>> // <Options> referrs to the options field above
}

type OptionProvideProps = {
    children:ReactNode
};

export const OptionContext = createContext<Partial<OptionsContext>>({});


export default function OptionsProvider({children}:OptionProvideProps){
    const [optionsData, setOptionsData] = useState<Options>({calories:0, carbohydrates:0, fat:0, protein:0, saturatedFat:0, sugar:0, salt:0})
    return (
        <OptionContext.Provider value={{options:optionsData, setOptionsData}}>
        {children}
        </OptionContext.Provider>
    )
}