import { Router } from "express";
import { createFrequency } from "../controllers/frequency.controller.js";

const router = Router();

//metodo post 
router.post("/", createFrequency);

export default router;
