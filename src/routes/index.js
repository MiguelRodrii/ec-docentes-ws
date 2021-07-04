import {Router} from 'express';
import {getAllDocentes} from "../controllers/controller.js";

export const routes = Router();

routes.get("/docentes", getAllDocentes)