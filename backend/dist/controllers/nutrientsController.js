"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFoodItem = exports.uploadImage = exports.getAllFood = exports.createFood = void 0;
const nutrients_1 = require("../models/nutrients");
const cloudinary_1 = require("../cloudinary/cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createFood = async (req, res) => {
    console.log("body", req.body);
    try {
        const food = new nutrients_1.Food(req.body);
        await food.save();
        res.status(201).json({ msg: "Food created", data: food });
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.createFood = createFood;
const getAllFood = async (req, res) => {
    try {
        const data = await nutrients_1.Food.find().sort({ name: "ascending" });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.getAllFood = getAllFood;
const uploadImage = async (req, res) => {
    const UPLOAD_PRESET = process.env.UPLOAD_PRESET;
    try {
        const name = Date.now();
        // upload image to cloudinary
        const uploadedImage = await cloudinary_1.cloudinary.uploader.upload(req.body.image, { upload_preset: UPLOAD_PRESET, public_id: `${name}`, allowed_formats: ["jpg", "png", "jpeg", "gif", "svg"], }, function (error, result) {
            if (error)
                console.log(error);
        });
        if (uploadedImage) {
            const cloudImg = uploadedImage.secure_url;
            const cloudImgPub = uploadedImage.public_id;
            console.log({ cloudImg, cloudImgPub });
            const response = await nutrients_1.Food.findByIdAndUpdate(req.params.id, { image: cloudImgPub }, { new: true });
            // Remove previous image from cloudinary
            if (req.body.previousImage) {
                await cloudinary_1.cloudinary.uploader.destroy(req.body.previousImage, (error, result) => {
                    if (error) {
                        console.error('Error deleting image:', error);
                    }
                    else {
                        console.log('Image deleted successfully:', result);
                    }
                });
            }
            ;
            return res.status(200).send(response);
        }
        ;
        res.status(400).json({ msg: "Image upload failed!" });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.uploadImage = uploadImage;
const deleteFoodItem = async (req, res) => {
    try {
        await nutrients_1.Food.findOneAndDelete({ name: req.body.name });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.deleteFoodItem = deleteFoodItem;
