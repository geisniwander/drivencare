import joi from 'joi';

export const appointmentSchema = joi.object({
  doctor_id: joi.number().required(),
  date: joi.date().required(),
  hour: joi.string()
    .pattern(/^([01]\d|2[0-3]):(00|30)(:[0-5]\d)?$/i)
    .custom((value, helpers) => {
      const [hour, minute] = value.split(':');
      if ((hour < 7 || hour >= 18) || (minute !== '00' && minute !== '30')) {
        return helpers.error('hourError');
      }
      return value;
    }, 'validate working hours')
    .required()
}).messages({
  'hourError': `A data/horário não estão disponíveis (consulta agendada no horário ou fora do horário de atendimento). Lembre-se: o horário de funcionamento é entre
  as 07:00:00 horas e as 18:00:00 e só é possível agendar consultas em horarios cheios ou com meia hora, como: 07:00:00, 07:30:00, 08:00:00`,
});