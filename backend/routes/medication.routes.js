import { Router } from "express";
import { createMedication } from "../controllers/medication.controller.js";
import { search_medication } from "../controllers/medication.controller.js";
import { list_medication } from "../controllers/medication.controller.js";
import { delete_medication } from "../controllers/medication.controller.js";
import { medicationATT } from "../controllers/medication.controller.js";

const router = Router();

//metodo post 
router.post("/", createMedication);

//metodo get
router.get("/search_medication/:id", search_medication);
router.get("/", list_medication);

//metodo delete
router.delete("/delete_medication/:id", delete_medication);

//metodo update/patch
router.patch("/:id", medicationATT);


export default router;