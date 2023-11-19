import {Schema, model} from "mongoose";

type FoodItem = {
    name:string,
    calories:number,
    carbohydrates:number,
    fat:number,
    protein:number,
    saturatedFat:number,
    sugar:number,
    salt:number
}

const foodSchema = new Schema({
    name:{type:String, required:true, unique:true},
    calories:{type:Number, required:true},
    carbohydrates:{type:Number, required:true},
    fat:{type:Number, required:true},
    protein:{type:Number, required:true},
    saturatedFat:{type:Number, required:true},
    sugar:{type:Number, required:true},
    salt:{type:Number, required:true}
});

export const Food = model<FoodItem>("Food", foodSchema)