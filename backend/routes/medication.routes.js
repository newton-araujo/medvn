import { Router } from "express";
import { createMedication } from "../controllers/medication.controller.js";

const router = Router();

//metodo post 
router.post("/", createMedication);

export default router;