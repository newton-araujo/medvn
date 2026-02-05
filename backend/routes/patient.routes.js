import { Router } from "express";
import { createPatient } from "../controllers/patient.controller.js";

const router = Router();

//metodo post 
router.post("/", createPatient);

export default router;