"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archive = void 0;
const mongoose_1 = require("mongoose");
const archiveSchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    grams: { type: Number, required: true },
    calories: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    fat: { type: Number, required: true },
    protein: { type: Number, required: true },
    saturatedFat: { type: Number, required: true },
    sugar: { type: Number, required: true },
    salt: { type: Number, required: true }
});
exports.Archive = (0, mongoose_1.model)("Archive", archiveSchema);
