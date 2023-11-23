import {Schema, model} from "mongoose";

type ArchiveItem = {
    date:string
    grams:number
    calories:number
    carbohydrates:number
    fat:number
    protein:number
    saturatedFat:number
    sugar:number
    salt:number
}

const archiveSchema = new Schema({
    date:{type:Date, required:true},
    grams:{type:Number, required:true},
    calories:{type:Number, required:true},
    carbohydrates:{type:Number, required:true},
    fat:{type:Number, required:true},
    protein:{type:Number, required:true},
    saturatedFat:{type:Number, required:true},
    sugar:{type:Number, required:true},
    salt:{type:Number, required:true}
});

export const Archive = model<ArchiveItem>("Archive", archiveSchema)