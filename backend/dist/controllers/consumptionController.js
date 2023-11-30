"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteConsumption = exports.deleteConsumptionItem = exports.getConsumption = exports.createConsumption = void 0;
const consumption_1 = require("../models/consumption");
const createConsumption = async (req, res) => {
    console.log("body", req.body);
    try {
        const consumption = await consumption_1.Consumption.insertMany(req.body);
        res.status(201).json({ msg: "Consumption created", data: consumption });
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.createConsumption = createConsumption;
const getConsumption = async (req, res) => {
    try {
        const data = await consumption_1.Consumption.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.getConsumption = getConsumption;
const deleteConsumptionItem = async (req, res) => {
    try {
        await consumption_1.Consumption.findOneAndDelete({ _id: req.params.id });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.deleteConsumptionItem = deleteConsumptionItem;
const deleteConsumption = async (req, res) => {
    try {
        await consumption_1.Consumption.deleteMany();
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.deleteConsumption = deleteConsumption;
