import errors from "../errors/index.js";
import doctorsRepository from "../repositories/doctorsRepository.js";
import jwt from "jsonwebtoken";

async function authValidationDoctors(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw errors.unauthorizedError();

  const parts = authorization.split(" ");
  if (parts.length !== 2) throw errors.unauthorizedError();

  const [schema, token] = parts;
  if (schema !== "Bearer") throw errors.unauthorizedError();

  jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
    try {
      if (error) throw errors.unauthorizedError();

      const {
        rows: [doctor],
      } = await doctorsRepository.findDoctorById(decoded.doctor_id);

      if (!doctor) throw errors.unauthorizedError();

      res.locals.doctor = doctor;

      next();
    } catch (err) {
      next(err);
    }
  });
}

export default { authValidationDoctors };