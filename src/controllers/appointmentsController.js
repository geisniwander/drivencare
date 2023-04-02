import appointmentService from "../services/appointmentService.js";

async function createAppointment(req, res, next) {
  const { patient_id, doctor_id, date, hour } = req.body;
  try {
    await appointmentService.createAppointment({ patient_id, doctor_id, date, hour });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function cancelAppointment(req, res, next) {
  const { appointment_id } = req.body;
  try {
    await appointmentService.cancelAppointment(appointment_id);
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}
/*
async function findDoctorsBySpecialty(req, res, next) {
  const { specialty } = req.body;
  try {
    const doctors = await doctorService.findDoctorBySpecialty({ specialty });
    return res.send({ doctors });
  } catch (err) {
    next(err);
  }
}
*/




export default {
    createAppointment,
    cancelAppointment
};