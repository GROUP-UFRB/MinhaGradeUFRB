import { Router } from "express";
import { peopleController } from "../controllers/people";

const peopleRoutes = Router();

peopleRoutes.post("/login", peopleController.login);

peopleRoutes.post("/register", peopleController.register);

export default peopleRoutes;
