import { createUser } from "../controller/user.controller.js";
import { Router } from "express";
import { createUserValidation } from "../validators/user.validator.js";
import { validate } from "../middleware/validate.js";
const router = Router();

router.post("/users",createUserValidation,validate, createUser);

export default router;