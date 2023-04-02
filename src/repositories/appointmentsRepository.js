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
        `SELECT "public.doctors".name AS doctor_name, "public.patients".name AS patient_name, "public.doctors".specialty, "public.appointments".date
        FROM "public.appointments"
        JOIN "public.doctors" ON "public.appointments".doctor_id = "public.doctors".id
        JOIN "public.patients" ON "public.appointments".patient_id = "public.patients".id
        WHERE doctor_id = $1 
        AND date = $2 
        AND time >= $3 
        AND time <= $4;`,
      [doctor_id, date, startTime.toLocaleTimeString(), endTime.toLocaleTimeString()]
    );
  }

export default {
    createAppointment,
    findAppointmentsByDate
  };