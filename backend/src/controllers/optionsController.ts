import { Request, Response } from "express";
import { Options } from "../models/options";

export const createOptions = async(req:Request, res:Response) => {
    try {
        const count = await Options.countDocuments();
        if (count === 0){
            const options = new Options(req.body);
            const response = await options.save();
            return res.status(201).json({msg:"Options created", data:response});
        }
        return res.status(409).json({msg:"Options already created!"});
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateOptions = async(req:Request, res:Response) => {
    try {
        const {id, calories, salt} = req.body;
        const carbohydrates = Math.round((req.body.calories * req.body.carbohydrates) / 4); // 1 gram of carbs = 4 calories
        const fat = Math.round((req.body.calories * req.body.fat) / 9); // 1 gram of fat = 9 calories
        const protein = Math.round((req.body.calories * req.body.protein) / 4); // 1 gram of protein = 4 calories
        const saturatedFat = Math.round((req.body.calories * req.body.saturatedFat) / 9); // belongs to fat
        const sugar = Math.round((req.body.calories * req.body.sugar) / 4); // belongs to carbs
        
        const response = await Options.findByIdAndUpdate(id, {calories, carbohydrates, fat, protein, saturatedFat, sugar, salt}, {new:true});
        res.status(200).json({msg:"Options updated", data:response});
    } catch (error) {
        res.status(500).send(error);    
    };
};

export const getAllOptions = async(req:Request, res:Response) => {
    try {
        const data = await Options.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    };
};