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

async function finishAppointment(req, res, next) {
  const { appointment_id } = req.body;
  try {
    await appointmentService.finishAppointment(appointment_id);
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsByDoctorId(req, res, next) {
  const { doctor_id } = req.body;
  try {
    const appointments = await appointmentService.findAppointmentsByDoctorId(doctor_id );

    return res.send({ appointments });
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsFinishedByDoctor(req, res, next) {
  const { doctor_id } = req.body;
  try {
    const appointments = await appointmentService.findAppointmentsFinishedByDoctor(doctor_id );

    return res.send({ appointments });
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsFinishedByPatient(req, res, next) {
  const { patient_id } = req.body;
  try {
    const appointments = await appointmentService.findAppointmentsFinishedByPatient(patient_id );

    return res.send({ appointments });
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsByPatientId(req, res, next) {
  const { patient_id } = req.body;
  try {
    const appointments = await appointmentService.findAppointmentsByPatientId(patient_id );

    return res.send({ appointments });

  } catch (err) {
    next(err);
  }
}


export default {
    createAppointment,
    cancelAppointment,
    findAppointmentsByPatientId,
    findAppointmentsByDoctorId,
    finishAppointment,
    findAppointmentsFinishedByPatient,
    findAppointmentsFinishedByDoctor
};