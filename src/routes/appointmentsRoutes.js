import { Router } from "express";
import appointmentsController from "../controllers/appointmentsController.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchema } from "../schemas/Appointment.js";

const appointmentsRoutes = Router();

appointmentsRoutes.post("/create", validateSchema(appointmentSchema) , appointmentsController.createAppointment)

export default appointmentsRoutes;