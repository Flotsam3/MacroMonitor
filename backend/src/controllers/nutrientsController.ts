import { Request, Response } from "express";
import { Food } from "../models/nutrients";

export const createFood = async(req:Request, res:Response) => {
    console.log("body", req.body);
    
    try {
        const food = new Food(req.body);
        await food.save();
        res.status(201).json({msg:"Food created", data: food});
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getAllFood = async(req:Request, res:Response) => {
    try {
        const data = await Food.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const deleteFoodItem = async(req:Request, res:Response) => {
    try {
        await Food.findOneAndDelete({name:req.body.name});
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    };
};