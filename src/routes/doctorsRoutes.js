import { Router } from "express";
import doctorsController from "../controllers/doctorsController.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchemma } from "../schemas/Doctor.js";

const doctorsRoutes = Router();

doctorsRoutes.post("/signup", validateSchema(doctorSchemma) , doctorsController.create)
doctorsRoutes.post("/signin", doctorsController.signin)

export default doctorsRoutes;