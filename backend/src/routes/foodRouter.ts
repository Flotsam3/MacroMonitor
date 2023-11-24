import { Router } from "express";
import * as food from "../controllers/nutrientsController";

const foodRouter = Router();

foodRouter
    .post("/food", food.createFood)
    .get("/food", food.getAllFood)
    .put("/food/images/:id", food.uploadImage)
    .delete("/food", food.deleteFoodItem)

export default foodRouter;