import { Request, Response } from "express";
import { Food } from "../models/nutrients";

export const createFood = async(req:Request, res:Response) => {
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