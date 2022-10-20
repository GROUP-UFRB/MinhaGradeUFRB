import { Router } from "express";
import { studentController } from "../controllers/student";

const studentRoutes = Router();

studentRoutes.get("/", studentController.all);
studentRoutes.get("/:id", studentController.index);
studentRoutes.post("/create", studentController.create);

export default studentRoutes;
