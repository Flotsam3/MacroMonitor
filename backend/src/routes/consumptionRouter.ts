import { Router } from "express";
import * as consumption from "../controllers/consumptionController";

const consumptionRouter = Router();

consumptionRouter
    .post("/consumption", consumption.createConsumption)
    .get("/consumption", consumption.getConsumption)
    .delete("/consumption/:id", consumption.deleteConsumptionItem)
    .delete("/consumption", consumption.deleteConsumption)

export default consumptionRouter;