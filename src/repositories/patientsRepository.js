import connectionDb from "../config/database.js";

async function findPatientByEmail(email) {
  return await connectionDb.query(
    `    
    SELECT * FROM "public.patients" WHERE email=$1
  `,
    [email]
  );
}

async function createPatient({ name, email, password }) {
  await connectionDb.query(
    `
        INSERT INTO "public.patients" (name, email, password)
        VALUES ($1, $2, $3)
    `,
    [name, email, password]
  );
}

async function findPatientById(id) {
  return await connectionDb.query(
    `    
    SELECT * FROM "public.patients" WHERE id=$1
  `,
    [id]
  );
}

export default {
  findPatientByEmail,
  createPatient,
  findPatientById,
};
