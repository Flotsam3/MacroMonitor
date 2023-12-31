"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = require("mongoose");
const foodSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    calories: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    fat: { type: Number, required: true },
    protein: { type: Number, required: true },
    saturatedFat: { type: Number, required: true },
    sugar: { type: Number, required: true },
    salt: { type: Number, required: true },
    image: { type: String }
});
exports.Food = (0, mongoose_1.model)("Food", foodSchema);
