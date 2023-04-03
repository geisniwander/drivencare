import joi from 'joi';

export const appointmentSchema = joi.object({
  doctor_id: joi.number().required(),
  date: joi.date().required(),
  hour: joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/)
    .custom((value, helpers) => {
      const [hour, minute, second] = value.split(':');
      if (hour < 7 || hour >= 18) {
        return helpers.error('any.invalid');
      }
      return value;
    }, 'validate working hours')
    .required()
});