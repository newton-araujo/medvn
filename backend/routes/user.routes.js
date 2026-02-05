import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { search_ID } from "../controllers/user.controller.js";
import { list_users } from "../controllers/user.controller.js";

const router = Router();

//metodo post
router.post("/", createUser);

//metodo get
router.get("/:id", search_ID);
router.get("/", list_users);

export default router;

