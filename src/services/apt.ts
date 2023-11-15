// const URL:string = "127.0.0.1:5000";

export const getAllOptions = async()=>{
    const response = await fetch("http://localhost:5000/options");
    const data = await response.json();
    return data;
};