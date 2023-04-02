import { Router } from "express";
import patientsController from "../controllers/patientsController.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { patientSchemma } from "../schemas/Patient.js";

const patientsRoutes = Router();

patientsRoutes.post("/signup", validateSchema(patientSchemma) , patientsController.createPatient)
patientsRoutes.post("/signin", patientsController.signin)

export default patientsRoutes;