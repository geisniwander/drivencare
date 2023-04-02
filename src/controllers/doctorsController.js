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

export default {
  create,
  signin,
};