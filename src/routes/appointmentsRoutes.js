import { Router } from "express";
import appointmentsController from "../controllers/appointmentsController.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchema } from "../schemas/Appointment.js";

const appointmentsRoutes = Router();

appointmentsRoutes.post("/create", validateSchema(appointmentSchema) , appointmentsController.createAppointment)
appointmentsRoutes.put("/cancel", appointmentsController.cancelAppointment)
appointmentsRoutes.put("/finish", appointmentsController.finishAppointment)
appointmentsRoutes.get("/doctor", appointmentsController.findAppointmentsByDoctorId)
appointmentsRoutes.get("/patient", appointmentsController.findAppointmentsByPatientId)
appointmentsRoutes.get("/finished/patient", appointmentsController.findAppointmentsFinishedByPatient)
appointmentsRoutes.get("/finished/doctor", appointmentsController.findAppointmentsFinishedByDoctor)


export default appointmentsRoutes;