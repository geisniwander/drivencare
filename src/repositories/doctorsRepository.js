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
    [name, email, password, specialty.toLowerCase(), city.toLowerCase(), state.toLowerCase()]
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

async function findDoctorBySpecialty(specialty) {
  return await connectionDb.query(
    `    
    SELECT name, email, specialty, city, state FROM "public.doctors" WHERE specialty ILIKE $1 || '%'
  `,
    [specialty.toLowerCase()]
  );
}

async function findDoctorByCity(city) {
  return await connectionDb.query(
    `    
    SELECT name, email, specialty, city, state FROM "public.doctors" WHERE city=$1
  `,
    [city.toLowerCase()]
  );
}

async function findDoctorByState(state) {
  return await connectionDb.query(
    `    
    SELECT name, email, specialty, city, state FROM "public.doctors" WHERE state=$1
  `,
    [state.toLowerCase()]
  );
}

async function findDoctorByName(name) {
  return await connectionDb.query(
    `    
    SELECT name, email, specialty, city, state FROM "public.doctors" WHERE name ILIKE $1 || '%'
  `,
    [name.toLowerCase()]
  );
}


export default {
  findDoctorByEmail,
  create,
  findDoctorById,
  findDoctorBySpecialty,
  findDoctorByCity,
  findDoctorByState,
  findDoctorByName
};