import doctorsRepository from "../repositories/doctorsRepository.js";
import errors from "../errors/index.js";
import "dotenv/config";
import appointmentsRepository from "../repositories/appointmentsRepository.js";
import { parse } from 'date-fns';

async function createAppointment({ patient_id, doctor_id, date, hour }) {

  const { rowCount } = await appointmentsRepository.findAppointmentsByDate(doctor_id, date, hour);
  if (rowCount) throw errors.ConflictDateError(date);

  await appointmentsRepository.createAppointment({patient_id, doctor_id, date, hour});
}

async function cancelAppointment(appointment_id) {

  const { rowCount } = await appointmentsRepository.findAppointmentsById(appointment_id);
  if (!rowCount) throw errors.invalidAppointmentError(appointment_id);

  await appointmentsRepository.cancelAppointment(appointment_id);
}

async function finishAppointment(appointment_id) {

  const { rowCount } = await appointmentsRepository.findAppointmentsById(appointment_id);
  if (!rowCount) throw errors.invalidAppointmentError(appointment_id);

  await appointmentsRepository.finishAppointment(appointment_id);
}

async function findAppointmentsByPatientId(patient_id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsByPatientId(patient_id);
  if (!rowCount) throw errors.notFoundError(patient_id);

  return rows;
}

async function findAppointmentsFinishedByPatient(patient_id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsFinishedByPatient(patient_id);
  if (!rowCount) throw errors.notFoundError(patient_id);

  return rows;
}

async function findAppointmentsFinishedByDoctor(doctor_id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsFinishedByDoctor(doctor_id);
  if (!rowCount) throw errors.notFoundError(doctor_id);

  return rows;
}

async function findAppointmentsByDoctorId(doctor_id) {
  const { rowCount, rows } = await appointmentsRepository.findAppointmentsByDoctorId(doctor_id);
  if (!rowCount) throw errors.notFoundError(doctor_id);

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