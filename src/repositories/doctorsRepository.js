import connectionDb from "../config/database.js";

async function findDoctorByEmail(email) {
  return await connectionDb.query(
    `    
    SELECT * FROM "public.doctors" WHERE email=$1
  `,
    [email]
  );
}

async function create({ name, email, password, specialty, city, state }) {
  await connectionDb.query(
    `
        INSERT INTO "public.doctors" (name, email, password, specialty, city, state)
        VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [name, email, password, specialty, city, state]
  );
}

async function findDoctorById(id) {
  return await connectionDb.query(
    `    
    SELECT * FROM "public.doctors" WHERE id=$1
  `,
    [id]
  );
}

export default {
  findDoctorByEmail,
  create,
  findDoctorById,
};