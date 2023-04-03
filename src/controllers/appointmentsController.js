import appointmentService from "../services/appointmentService.js";

async function createAppointment(req, res, next) {
  const { id } = res.locals.patient; 
  const { doctor_id, date, hour } = req.body;

  try {
    await appointmentService.createAppointment({ id, doctor_id, date, hour });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function cancelAppointment(req, res, next) {
  const { id } = res.locals.doctor; 
  const { appointment_id } = req.params;
  try {
    await appointmentService.cancelAppointment({appointment_id, id});
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function finishAppointment(req, res, next) {
  const { id } = res.locals.doctor; 

  const { appointment_id } = req.params;

  try {
    await appointmentService.finishAppointment({appointment_id, id});
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsByDoctorId(req, res, next) {
  const { id } = res.locals.doctor; 
  try {
    const appointments = await appointmentService.findAppointmentsByDoctorId(id);

    return res.send({ appointments });
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsFinishedByDoctor(req, res, next) {
  const { id } = res.locals.doctor; 

  try {
    const appointments = await appointmentService.findAppointmentsFinishedByDoctor(id);

    return res.send({ appointments });
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsFinishedByPatient(req, res, next) {
  const { id } = res.locals.patient; 

  try {
    const appointments = await appointmentService.findAppointmentsFinishedByPatient(id);

    return res.send({ appointments });
  } catch (err) {
    next(err);
  }
}

async function findAppointmentsByPatientId(req, res, next) {
  const { id } = res.locals.patient; 

  try {
    const appointments = await appointmentService.findAppointmentsByPatientId(id);

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