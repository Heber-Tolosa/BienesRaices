import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioForgetPassword,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin);
router.get("/register", formularioRegistro);
router.get("/forget-password", formularioForgetPassword);

export default router;
