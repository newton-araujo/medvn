import { Router } from "express";
import { createFrequency } from "../controllers/frequency.controller.js";
import { search_frequency } from "../controllers/frequency.controller.js";
import { list_frequency } from "../controllers/frequency.controller.js";
import { delete_frequency } from "../controllers/frequency.controller.js";
import { frequencyATT } from "../controllers/frequency.controller.js";

const router = Router();

//metodo post 
router.post("/", createFrequency);

//metodo get
router.get("/search_frequency/:id", search_frequency);
router.get("/", list_frequency);

//metodo delete
router.delete("/delete_frequency/:id", delete_frequency);

//metodo update/patch
router.patch("/:id", frequencyATT);

export default router;
