import { Router } from "express";
import patientsRoutes from "./patientsRoutes.js";
import doctorsRoutes from "./doctorsRoutes.js";
import appointmentsRoutes from "./appointmentsRoutes.js";

const routes = Router();

routes.use("/patients", patientsRoutes);
routes.use("/doctors", doctorsRoutes);
routes.use("/appointments", appointmentsRoutes);


export default routes;