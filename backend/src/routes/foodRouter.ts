import { Router } from "express";
import * as food from "../controllers/nutrientsController";
import { productSchema } from "../schemas/newProductSchema";
import { validateSchema } from "../middleware/schema-validation";

const foodRouter = Router();

foodRouter
    .post("/food", productSchema, validateSchema, food.createFood)
    .get("/food", food.getAllFood)
    .put("/food/images/:id", food.uploadImage)
    .delete("/food", food.deleteFoodItem)

export default foodRouter;