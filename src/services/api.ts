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