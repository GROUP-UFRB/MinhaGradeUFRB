import { Router } from "express";
import { centerController } from "../controllers/center";

const centerRoutes = Router();

centerRoutes.post("/create", centerController.create);
centerRoutes.get("/", centerController.all);
centerRoutes.get("/:cod_center", centerController.code);

export default centerRoutes;
