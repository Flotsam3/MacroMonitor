import { Request, Response } from "express";
import { Options } from "../models/options";

export const createOptions = async(req:Request, res:Response) => {
    try {
        const options = new Options(req.body);
        const response = await options.save();
        res.status(201).json({msg:"Options created", data:response});
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateOptions = async(req:Request, res:Response) => {
    try {
        const {calories, carbohydrates, fat, protein, saturatedFat, sugar, salt} = req.body;
        const response = Options.findOneAndUpdate({calories:req.body.calories}, {calories, carbohydrates, fat, protein, saturatedFat, sugar, salt}, {new:true});
        res.status(200).json({msg:"Options updated", data:response});
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getAllOptions = async(req:Request, res:Response) => {
    console.log("inside controller");
    
    try {
        const data = await Options.find();
        console.log({data});
        
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    };
};