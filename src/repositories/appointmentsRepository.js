import connectionDb from "../config/database.js";


async function createAppointment({ patient_id, doctor_id, date, hour}) {

    await connectionDb.query(
    `
        INSERT INTO "public.appointments" (patient_id, doctor_id, date, time)
        VALUES ($1, $2, $3, $4)
    `,
    [patient_id, doctor_id, date, hour]
  );
}

async function findAppointmentsByDate(doctor_id, date, time) {
    const times = new Date(`${date}T${time}`);
    const startTime = new Date(times.getTime() - 30 * 60000)
    const endTime = new Date(times.getTime() + 30 * 60000);

    return await connectionDb.query(
        `SELECT "public.appointments".id, "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date, "public.appointments".canceled
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE doctor_id = $1 
        AND date = $2 
        AND time >= $3 
        AND time <= $4
        AND canceled = false;`,
      [doctor_id, date, startTime.toLocaleTimeString(), endTime.toLocaleTimeString()]
    );
  }

  async function findAppointmentsById(appointment_id) {
    return await connectionDb.query(
        `SELECT "public.appointments".id, "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date, "public.appointments".canceled
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE "public.appointments".id = $1 `,
      [appointment_id]
    );
  }

  async function findAppointmentsByDoctorId(doctor_id) {
    return await connectionDb.query(
        `SELECT "public.appointments".id, "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date, "public.appointments".canceled
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE "public.doctors".id = $1 `,
      [doctor_id]
    );
  }

  async function findAppointmentsByPatientId(patient_id) {
    return await connectionDb.query(
        `SELECT "public.appointments".id, "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date, "public.appointments".canceled
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE "public.patients".id = $1 `,
      [patient_id]
    );
  }

  async function findAppointmentsFinishedByPatient(patient_id) {
    return await connectionDb.query(
        `SELECT "public.appointments".id, "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date, "public.appointments".canceled
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE "public.patients".id = $1 
        AND "public.appointments".finished = true`,
      [patient_id]
    );
  }

  async function findAppointmentsFinishedByDoctor(doctor_id) {
    return await connectionDb.query(
        `SELECT "public.appointments".id, "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date, "public.appointments".canceled
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE "public.doctors".id = $1 
        AND "public.appointments".finished = true`,
      [doctor_id]
    );
  }

  async function cancelAppointment(appointment_id) {

    await connectionDb.query(
    `
    UPDATE "public.appointments"
    SET canceled = true WHERE "public.appointments".id = $1;
    `,
    [appointment_id]
  );
}

async function finishAppointment(appointment_id) {

  await connectionDb.query(
  `
  UPDATE "public.appointments"
  SET finished = true WHERE "public.appointments".id = $1;
  `,
  [appointment_id]
);
}

export default {
    createAppointment,
    findAppointmentsByDate,
    cancelAppointment,
    findAppointmentsById,
    findAppointmentsByDoctorId,
    findAppointmentsByPatientId,
    findAppointmentsFinishedByPatient,
    findAppointmentsFinishedByDoctor,
    finishAppointment
  };