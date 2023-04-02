import bcrypt from "bcrypt";
import doctorsRepository from "../repositories/doctorsRepository.js";
import errors from "../errors/index.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import patientsRepository from "../repositories/patientsRepository.js";

async function create({ name, email, password, specialty, city, state }) {
  const { rowCount } = await doctorsRepository.findDoctorByEmail(email);
  const patientCount = (await patientsRepository.findPatientByEmail(email)).rowCount;
  if (rowCount || patientCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await doctorsRepository.create({ name, email, password: hashPassword, specialty, city, state });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [doctor],
  } = await doctorsRepository.findDoctorByEmail(email);
  if (!rowCount) throw errors.invalidCredentialsError();

  const validPassword = await bcrypt.compare(password, doctor.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const token = jwt.sign({ doctor_id: doctor.id }, process.env.SECRET_KEY, { expiresIn: 86400 }); // A chave secreta é um hash SHA-256

  return token;
}


async function findDoctorByCity({city}) {
  const { rowCount, rows } = await doctorsRepository.findDoctorByCity(city);
  if (!rowCount) throw errors.notFoundError(city);

  return rows;
}

async function findDoctorByState({state}) {
  const { rowCount, rows } = await doctorsRepository.findDoctorByState(state);
  if (!rowCount) throw errors.notFoundError(state);

  return rows;
}

async function findDoctorBySpecialty({specialty}) {
  const { rowCount, rows } = await doctorsRepository.findDoctorBySpecialty(specialty);
  if (!rowCount) throw errors.notFoundError(specialty);

  return rows;
}

async function findDoctorByName({name}) {
  const { rowCount, rows } = await doctorsRepository.findDoctorByName(name);
  if (!rowCount) throw errors.notFoundError(name);

  return rows;
}

export default {
  create,
  signin,
  findDoctorByCity,
  findDoctorByState,
  findDoctorBySpecialty,
  findDoctorByName
};