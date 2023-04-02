import { Router } from "express";
import appointmentsController from "../controllers/appointmentsController.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchema } from "../schemas/Appointment.js";

const appointmentsRoutes = Router();

appointmentsRoutes.post("/create", validateSchema(appointmentSchema) , appointmentsController.createAppointment)
appointmentsRoutes.put("/cancel", appointmentsController.cancelAppointment)
appointmentsRoutes.get("/doctor", appointmentsController.findAppointmentsByDoctorId)
appointmentsRoutes.get("/patient", appointmentsController.findAppointmentsByPatientId)


export default appointmentsRoutes;