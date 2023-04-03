import bcrypt from "bcrypt";
import patientsRepository from "../repositories/patientsRepository.js";
import errors from "../errors/index.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import doctorsRepository from "../repositories/doctorsRepository.js";

async function createPatient({ name, email, password }) {
  const { rowCount } = await patientsRepository.findPatientByEmail(email);
  const doctorCount = (await doctorsRepository.findDoctorByEmail(email))
    .rowCount;
  if (rowCount || doctorCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await patientsRepository.createPatient({
    name,
    email,
    password: hashPassword,
  });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [patient],
  } = await patientsRepository.findPatientByEmail(email);
  if (!rowCount) throw errors.invalidCredentialsError();

  const validPassword = await bcrypt.compare(password, patient.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const token = jwt.sign({ patient_id: patient.id }, process.env.SECRET_KEY, {
    expiresIn: 86400,
  }); 

  return token;
}

export default {
  createPatient,
  signin,
};
