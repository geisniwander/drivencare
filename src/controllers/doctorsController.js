import doctorService from "../services/doctorService.js";

async function create(req, res, next) {
  const { name, email, password, specialty, city, state } = req.body;
  try {
    await doctorService.create({ name, email, password, specialty, city, state });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function signin(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await doctorService.signin({ email, password });
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}

async function findDoctorsBySpecialty(req, res, next) {
  const { specialty } = req.body;
  try {
    const doctors = await doctorService.findDoctorBySpecialty({ specialty });
    return res.send({ doctors });
  } catch (err) {
    next(err);
  }
}

async function findDoctorsByCity(req, res, next) {
  const { city } = req.body;
  try {
    const doctors = await doctorService.findDoctorByCity({ city });
    return res.send({ doctors });
  } catch (err) {
    next(err);
  }
}

async function findDoctorsByState(req, res, next) {
  const { state } = req.body;
  try {
    const doctors = await doctorService.findDoctorByState({ state });
    return res.send({ doctors });
  } catch (err) {
    next(err);
  }
}

async function findDoctorsByName(req, res, next) {
  const { name } = req.body;
  try {
    const doctors = await doctorService.findDoctorByName({ name });
    return res.send({ doctors });
  } catch (err) {
    next(err);
  }
}



export default {
  create,
  signin,
  findDoctorsBySpecialty,
  findDoctorsByCity,
  findDoctorsByState,
  findDoctorsByName
};