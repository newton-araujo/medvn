import { Router } from "express";
import { createPatient } from "../controllers/patient.controller.js";
import { search_patient } from "../controllers/patient.controller.js";
import { list_patient } from "../controllers/patient.controller.js";
import { delete_patient } from "../controllers/patient.controller.js";
import { patientATT } from "../controllers/patient.controller.js";

const router = Router();

//metodo post 
router.post("/", createPatient);

//metodo get
router.get("/search_patient/:cpf", search_patient);
router.get("/", list_patient);

//metodo delete
router.delete("/delete_patient/:cpf", delete_patient);

//metodo update/patch
router.patch("/:cpf", patientATT);

export default router;