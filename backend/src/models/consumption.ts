import {Schema, model} from "mongoose";

type ConsumptionItem = {
    name:string
    grams:number
    calories:number
    carbohydrates:number
    fat:number
    protein:number
    saturatedFat:number
    sugar:number
    salt:number
}

const consumptionSchema = new Schema({
    name:{type:String, required:true},
    grams:{type:Number, required:true},
    calories:{type:Number, required:true},
    carbohydrates:{type:Number, required:true},
    fat:{type:Number, required:true},
    protein:{type:Number, required:true},
    saturatedFat:{type:Number, required:true},
    sugar:{type:Number, required:true},
    salt:{type:Number, required:true}
});

export const Consumption = model<ConsumptionItem>("Consumption", consumptionSchema)