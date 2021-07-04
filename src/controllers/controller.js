import {pool as db} from "../db/connection.js";
export const getAllDocentes = async (req, res, next) => {
    try {
        const response = await db.query("select * from docentes;");
        res.json(response.rows);
    } catch (error) {
        next(error.message);
    }
};