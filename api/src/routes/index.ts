import { Router } from "express";
const routes = Router();

import peopleRoutes from "./people";
import studentRoutes from "./student";
import subjectRoutes from "./subject";
import centerRoutes from "./center";

routes.use("/people", peopleRoutes);
routes.use("/student", studentRoutes);
routes.use("/subject", subjectRoutes);
routes.use("/center", centerRoutes);

export default routes;
