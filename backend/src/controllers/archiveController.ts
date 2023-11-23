import { Request, Response } from "express";
import { Archive } from "../models/archive";

export const createArchive = async(req:Request, res:Response) => {
    console.log("body", req.body);
    
    try {
        const archive = new Archive(req.body);
        await archive.save();
        res.status(201).json({msg:"Archive item created", data: archive});
    } catch (error) {
        res.status(500).send(error);
    };
};

export const getArchive = async(req:Request, res:Response) => {
    try {
        const data = await Archive.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const deleteArchiveItem = async(req:Request, res:Response) => {
    try {
        await Archive.findOneAndDelete({_id:req.params.id});
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    };
};

export const deleteArchive = async(req:Request, res:Response) => {
    try {
        await Archive.deleteMany();
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    };
};