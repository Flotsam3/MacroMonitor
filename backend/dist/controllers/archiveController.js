"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArchive = exports.deleteArchiveItem = exports.getArchive = exports.createArchive = void 0;
const archive_1 = require("../models/archive");
const createArchive = async (req, res) => {
    console.log("body", req.body);
    try {
        const archive = new archive_1.Archive(req.body);
        await archive.save();
        res.status(201).json({ msg: "Archive item created", data: archive });
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.createArchive = createArchive;
const getArchive = async (req, res) => {
    try {
        const data = await archive_1.Archive.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.getArchive = getArchive;
const deleteArchiveItem = async (req, res) => {
    try {
        await archive_1.Archive.findOneAndDelete({ _id: req.params.id });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.deleteArchiveItem = deleteArchiveItem;
const deleteArchive = async (req, res) => {
    try {
        await archive_1.Archive.deleteMany();
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send(error);
    }
    ;
};
exports.deleteArchive = deleteArchive;
