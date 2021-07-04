import pkg from 'pg';
const { Pool } = pkg;

const dbUrl = process.env.DATABASE_URL === undefined ? "postgres://postgres:admin@localhost:5432/docentes" : process.env.DATABASE_URL;

export const pool = new Pool({
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false }
});