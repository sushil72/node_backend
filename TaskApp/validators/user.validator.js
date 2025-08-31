import {body} from "express-validator";

export const createUserValidation=[
    body("name")
        .notEmpty()
        .withMessage("name is required")
        .isLength({min:3})
        .withMessage("name must be at least 3 characters long"),
    body("email")
     .notEmpty()
     .withMessage("Email is required")
     .isEmail()
     .withMessage("Please Enter a valid email"),

     body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({min:6})
        .withMessage("Password must be at least 6 characters long")
]