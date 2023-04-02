import { Router } from "express";
import patientsRoutes from "./patientsRoutes.js";
import doctorsRoutes from "./doctorsRoutes.js";

const routes = Router();

routes.use("/patients", patientsRoutes);
routes.use("/doctors", doctorsRoutes);

export default routes;