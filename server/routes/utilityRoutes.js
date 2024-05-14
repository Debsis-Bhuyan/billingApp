import { Router } from "express";
const router = Router();


import { feedbackForm, helpForm } from "../controller/utilityController.js";
import authenticateUser from "../middleware/authMiddleware.js";

router.post("/feedback",authenticateUser, feedbackForm);
router.post("/help", helpForm);

export default router;
