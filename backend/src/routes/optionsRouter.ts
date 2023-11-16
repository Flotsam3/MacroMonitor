import { Router } from "express";
import * as option from "../controllers/optionsController";

const optionsRouter = Router();

optionsRouter
    .post("/options", option.createOptions)
    .patch("/options", option.updateOptions)
    .get("/options", option.getAllOptions)

export default optionsRouter;