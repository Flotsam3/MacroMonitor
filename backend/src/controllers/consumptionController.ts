import { Request, Response } from "express";
import { Consumption } from "../models/consumption";

export const createConsumption = async(req:Request, res:Response) => {
    console.log("body", req.body);
    
    try {
        const consumption = await Consumption.insertMany(req.body);
        res.status(201).json({msg:"Consumption created", data: consumption});
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getConsumption = async(req:Request, res:Response) => {
    try {
        const data = await Consumption.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const deleteConsumptionItem = async(req:Request, res:Response) => {
    try {
        await Consumption.findOneAndDelete({_id:req.params.id});
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    };
};

export const deleteConsumption = async(req:Request, res:Response) => {
    try {
        await Consumption.deleteMany();
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    };
};