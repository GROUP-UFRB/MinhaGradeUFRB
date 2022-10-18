import { Router } from "express";
import { subjectController } from "../controllers/subject";

const subjectRoutes = Router();

subjectRoutes.get("/", subjectController.all);
subjectRoutes.get("/:id", subjectController.index);
subjectRoutes.get("/code/:subject_code", subjectController.code);
subjectRoutes.post("/create", subjectController.create);

export default subjectRoutes;
