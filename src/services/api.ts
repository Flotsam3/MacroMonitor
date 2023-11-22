import { Options } from "../context/OptionContext";

const URL:string = "http://localhost:5000";

export const createOptions = async(payload:object)=>{
    const response = await fetch(URL + "/options",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const updateOptions = async(payload:object)=>{
    const response = await fetch(URL + "/options", {
        method: "PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}

export const getAllOptions = async()=>{
    const response = await fetch(URL + "/options");
    const data = await response.json();
    return data;
};

export const createFood = async(payload:object)=>{
    const response = await fetch(URL + "/food",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const getAllFood = async()=>{
    const response = await fetch(URL + "/food");
    const data = await response.json();
    return data;
};

export const deleteFoodItem = async(payload:object)=>{
    await fetch(URL + "/food",{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });
};

export const saveConsumption = async(payload:Options[])=>{
    const response = await fetch(URL + "/consumption",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const getConsumption = async()=>{
    const response = await fetch(URL + "/consumption");
    const data = await response.json();
    return data;
};

export const deleteConsumptionItem = async(id:string):Promise<void>=>{
    await fetch(URL + `/consumption/${id}`,{
        method:"DELETE",
    });
};

export const deleteConsumption = async():Promise<void>=>{
    await fetch(URL + "/consumption",{
        method:"DELETE",
    });
};