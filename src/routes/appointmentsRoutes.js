import { Router } from "express";
import appointmentsController from "../controllers/appointmentsController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchema } from "../schemas/Appointment.js";
import authValidationDoctors from "../middlewares/authMiddlewareDoctors.js";
import authValidationPatients from "../middlewares/authMiddlewarePatients.js";

const appointmentsRoutes = Router();

appointmentsRoutes.post(
  "/create",
  authValidationPatients.authValidationPatients,
  validateSchema(appointmentSchema),
  appointmentsController.createAppointment
);
appointmentsRoutes.get(
  "/patient",
  authValidationPatients.authValidationPatients,
  appointmentsController.findAppointmentsByPatientId
);
appointmentsRoutes.get(
  "/finished/patient",
  authValidationPatients.authValidationPatients,
  appointmentsController.findAppointmentsFinishedByPatient
);
appointmentsRoutes.put(
  "/cancel/:appointment_id",
  authValidationDoctors.authValidationDoctors,
  appointmentsController.cancelAppointment
);
appointmentsRoutes.put(
  "/finish/:appointment_id",
  authValidationDoctors.authValidationDoctors,
  appointmentsController.finishAppointment
);
appointmentsRoutes.get(
  "/doctor",
  authValidationDoctors.authValidationDoctors,
  appointmentsController.findAppointmentsByDoctorId
);
appointmentsRoutes.get(
  "/finished/doctor",
  authValidationDoctors.authValidationDoctors,
  appointmentsController.findAppointmentsFinishedByDoctor
);

export default appointmentsRoutes;
