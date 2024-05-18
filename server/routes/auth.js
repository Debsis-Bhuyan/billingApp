import { Router } from "express";
const router = Router();

import {
  login,
  register,
  changePassword,
} from "../controller/authController.js";

router.post("/register", register);

router.post("/login", login);
import authenticateUser from "../middleware/authMiddleware.js";
router.post("/reset-password", authenticateUser, changePassword);

export default router;
