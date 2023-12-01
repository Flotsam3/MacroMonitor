import { Options } from "../context/OptionContext";

const URL:string = "https://macromonitor-backend.onrender.com";

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

export const createArchiveItem = async(payload:object)=>{
    const response = await fetch(URL + "/archive",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const getArchive = async()=>{
    const response = await fetch(URL + "/archive");
    const data = await response.json();
    return data;
};

export const deleteArchiveItem = async(id:string):Promise<void>=>{
    await fetch(URL + `/archive/${id}`,{
        method:"DELETE",
    });
};

export const deleteArchive = async():Promise<void>=>{
    await fetch(URL + "/archive",{
        method:"DELETE",
    });
};

export const uploadImage = async(id:string, image:string, base64Image:string | ArrayBuffer):Promise<void>=> {
    try {
        const response = await fetch(URL + "/food/images/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({previousImage:image, image: base64Image }),
        });

        console.log({response});
        return response.json();
    } catch (error) {
        throw error;
    };
};
