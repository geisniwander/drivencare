import errors from "../errors/index.js";
import "dotenv/config";
import appointmentsRepository from "../repositories/appointmentsRepository.js";

async function createAppointment({ patient_id, doctor_id, date, hour }) {

  const { rowCount } = await appointmentsRepository.findAppointmentsByDate(doctor_id, date, hour);
  if (rowCount) throw errors.ConflictDateError(date);

  await appointmentsRepository.createAppointment({patient_id, doctor_id, date, hour});
}

async function cancelAppointment({appointment_id, id}) {

  const { rowCount } = await appointmentsRepository.findAppointmentsById({appointment_id, id});
  if (!rowCount) throw errors.invalidAppointmentError(appointment_id);

  await appointmentsRepository.cancelAppointment({appointment_id, id});
}

async function finishAppointment({appointment_id, id}) {

  const { rowCount } = await appointmentsRepository.findAppointmentsById({appointment_id, id});
  if (!rowCount) throw errors.invalidAppointmentError(appointment_id);

  await appointmentsRepository.finishAppointment({appointment_id, id});
}

async function findAppointmentsByPatientId(id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsByPatientId(id);
  if (!rowCount) throw errors.notFoundError(patient_id);

  return rows;
}

async function findAppointmentsFinishedByPatient(id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsFinishedByPatient(id);
  if (!rowCount) throw errors.notFoundError(id);

  return rows;
}

async function findAppointmentsFinishedByDoctor(id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsFinishedByDoctor(id);
  if (!rowCount) throw errors.notFoundError(id);

  return rows;
}

async function findAppointmentsByDoctorId(id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsByDoctorId(id);
  if (!rowCount) throw errors.notFoundError(id);

  return rows;
}



export default {
createAppointment,
cancelAppointment,
findAppointmentsByPatientId,
findAppointmentsByDoctorId,
findAppointmentsFinishedByPatient,
findAppointmentsFinishedByDoctor,
finishAppointment
};