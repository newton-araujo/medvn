import { Router } from "express";
import {
  createUser,
  search_ID,
  list_users,
  delete_user,
  userATT
} from "../controllers/user.controller.js";

const router = Router();

//metodo post
router.post("/", createUser);

//metodo get
router.get("/search_user/:cpf", search_ID);
router.get("/", list_users);

//metodo delete
router.delete("/delete_user/:cpf", delete_user);

//metodo update/patch
router.patch("/:cpf", userATT);

export default router;
