import { Router } from "express";
import patientsController from "../controllers/patientsController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { patientSchema } from "../schemas/Patient.js";

const patientsRoutes = Router();

patientsRoutes.post(
  "/signup",
  validateSchema(patientSchema),
  patientsController.createPatient
);
patientsRoutes.post("/signin", patientsController.signin);

export default patientsRoutes;
