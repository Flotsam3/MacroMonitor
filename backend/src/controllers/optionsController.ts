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
        const {calories, carbohydrates, fat, protein, saturatedFat, sugar, salt} = req.body;
        const response = Options.findOneAndUpdate({calories:req.body.calories}, {calories, carbohydrates, fat, protein, saturatedFat, sugar, salt}, {new:true});
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