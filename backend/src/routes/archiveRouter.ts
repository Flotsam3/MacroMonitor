import { Router } from "express";
import * as archive from "../controllers/archiveController";

const archiveRouter = Router();

archiveRouter
    .post("/archive", archive.createArchive)
    .get("/archive", archive.getArchive)
    .delete("/archive/:id", archive.deleteArchiveItem)
    .delete("/archive", archive.deleteArchive)

export default archiveRouter;