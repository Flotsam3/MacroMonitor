"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOptions = exports.updateOptions = exports.createOptions = void 0;
const options_1 = require("../models/options");
const createOptions = async (req, res) => {
    try {
        const count = await options_1.Options.countDocuments();
        if (count === 0) {
            const options = new options_1.Options(req.body);
            const response = await options.save();
            return res.status(201).json({ msg: "Options created", data: response });
        }
        return res.status(409).json({ msg: "Options already created!" });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.createOptions = createOptions;
const updateOptions = async (req, res) => {
    try {
        const { id, calories, salt } = req.body;
        const carbohydrates = Math.round((+req.body.calories * +req.body.carbohydrates) / 4); // 1 gram of carbs = 4 calories
        const fat = Math.round((+req.body.calories * +req.body.fat) / 9); // 1 gram of fat = 9 calories
        const protein = Math.round((+req.body.calories * +req.body.protein) / 4); // 1 gram of protein = 4 calories
        const saturatedFat = Math.round((+req.body.calories * +req.body.saturatedFat) / 9); // belongs to fat
        const sugar = Math.round((+req.body.calories * +req.body.sugar) / 4); // belongs to carbs
        const response = await options_1.Options.findByIdAndUpdate(id, { calories: +calories, carbohydrates, fat, protein, saturatedFat, sugar, salt: +salt }, { new: true });
        res.status(200).json({ msg: "Options updated", data: response });
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.updateOptions = updateOptions;
const getAllOptions = async (req, res) => {
    try {
        const data = await options_1.Options.find();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.getAllOptions = getAllOptions;
