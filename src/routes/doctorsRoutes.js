import { Router } from "express";
import doctorsController from "../controllers/doctorsController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchema } from "../schemas/Doctor.js";

const doctorsRoutes = Router();

doctorsRoutes.post(
  "/signup",
  validateSchema(doctorSchema),
  doctorsController.create
);
doctorsRoutes.post("/signin", doctorsController.signin);
doctorsRoutes.get("/specialty", doctorsController.findDoctorsBySpecialty);
doctorsRoutes.get("/city", doctorsController.findDoctorsByCity);
doctorsRoutes.get("/state", doctorsController.findDoctorsByState);
doctorsRoutes.get("/name", doctorsController.findDoctorsByName);
doctorsRoutes.get("/schedule", doctorsController.getSchedule);

export default doctorsRoutes;
