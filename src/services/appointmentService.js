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

async function findDoctorByCity({city}) {
  const { rowCount, rows } = await doctorsRepository.findDoctorByCity(city);
  if (!rowCount) throw errors.notFoundError(city);

  return rows;
}



export default {
createAppointment,
findDoctorByCity,
};