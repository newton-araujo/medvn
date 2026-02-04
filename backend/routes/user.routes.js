import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const router = Router();

//metodo post
router.post("/", createUser);

export default router;

