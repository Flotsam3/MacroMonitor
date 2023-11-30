"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL || "default";
mongoose_1.default.connect(MONGO_URL, { dbName: process.env.DATABASE })
    .then(() => console.log("Connected to mongoDB!"))
    .catch(() => console.log("Connection error!"));
