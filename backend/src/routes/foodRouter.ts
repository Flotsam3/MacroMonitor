import { Router } from "express";
import * as food from "../controllers/nutrientsController";

const foodRouter = Router();

foodRouter
    .post("/food", food.createFood)
    .get("/food", food.getAllFood)

export default foodRouter;