import { Router } from "express";
import * as food from "../controllers/nutrientsController";

const router = Router();

router
    .post("/food", food.createFood)
    .get("/food", food.getAllFood)

export default router;