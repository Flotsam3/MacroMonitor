import express from "express";
import dotenv from "dotenv";
dotenv.config();
import foodRouter from "./routes/foodRouter";
import optionsRouter from "./routes/optionsRouter";
import consumptionRouter from "./routes/consumptionRouter";
import archiveRouter from "./routes/archiveRouter";
import "./utils/mongodb";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use("/", foodRouter);
app.use("/", optionsRouter);
app.use("/", consumptionRouter);
app.use("/", archiveRouter);

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
});