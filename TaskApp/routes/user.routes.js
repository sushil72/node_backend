import { createUser ,loginUser} from "../controller/user.controller.js";
import { Router } from "express";
import { createUserValidation } from "../validators/user.validator.js";
import { validate } from "../middleware/validate.js";
const router = Router();

router.post("/register",createUserValidation,validate, createUser);
router.post("/login", loginUser);

export default router;