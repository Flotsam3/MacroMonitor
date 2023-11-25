import { Request, Response } from "express";
import { Food } from "../models/nutrients";
import { cloudinary } from "../cloudinary/cloudinary";
import dotenv from "dotenv";
dotenv.config();

type CloudinaryResult = {
    resultKey: string; // Replace with the actual structure of the result object
    // Add other properties as per the Cloudinary result structure
  }

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
        const data = await Food.find().sort({name:"ascending"});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error);
    };
};

export const uploadImage = async(req:Request, res:Response) => {
    const UPLOAD_PRESET = process.env.UPLOAD_PRESET;
    try {
        const name = Date.now();
        // upload image to cloudinary
        const uploadedImage = await cloudinary.uploader.upload(req.body.image, 
            {upload_preset: UPLOAD_PRESET, public_id: `${name}`, allowed_formats: ["jpg", "png", "jpeg", "gif", "svg"],},
            function (error, result) {
                if (error) console.log(error);
            }
        );
        if (uploadedImage){
            const cloudImg = uploadedImage.secure_url;
            const cloudImgPub = uploadedImage.public_id;
            console.log({cloudImg, cloudImgPub});
            
            const response = await Food.findByIdAndUpdate(req.params.id,{image:cloudImgPub}, {new:true});
            // Remove previous image from cloudinary
            if (req.body.previousImage){
                await cloudinary.uploader.destroy(req.body.previousImage, (error: Error | undefined, result: CloudinaryResult | undefined) => {
                    if (error) {
                      console.error('Error deleting image:', error);
                    } else {
                      console.log('Image deleted successfully:', result);
                    }
                });
            };

            return res.status(200).send(response);
        };
        res.status(400).json({msg:"Image upload failed!"})
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteFoodItem = async(req:Request, res:Response) => {
    try {
        await Food.findOneAndDelete({name:req.body.name});
        res.status(204).end();
    } catch (error) {
        res.status(500).send(error);
    };
};