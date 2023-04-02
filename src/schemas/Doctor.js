import joi from "joi";

export const doctorSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
  specialty: joi.string().required(),
  city: joi.string().required(),
  state: joi.string().required()
});