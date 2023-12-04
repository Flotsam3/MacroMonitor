import {body} from "express-validator";

export const productSchema = [
    body("name")
        .exists().escape().trim().isLength({min:2, max:40}).withMessage("The name must be between 2 and 40 characters long!"),
    body("calories")
        .exists().escape().trim().isNumeric().withMessage("Calories cannot be empty and must be a number!"),
    body("carbohydrates")
        .exists().escape().trim().isNumeric().withMessage("Carbohydrates cannot be empty and must be a number!"),
    body("fat")
        .exists().escape().trim().isNumeric().withMessage("Fat cannot be empty and must be a number!"),
    body("protein")
        .exists().escape().trim().isNumeric().withMessage("Protein cannot be empty and must be a number!"),
    body("saturatedFat")
        .exists().escape().trim().isNumeric().withMessage("Saturated fat cannot be empty and must be a number!"),
    body("sugar")
        .exists().escape().trim().isNumeric().withMessage("Sugar cannot be empty and must be a number!"),
    body("salt")
        .exists().escape().trim().isNumeric().withMessage("Salt cannot be empty and must be a number!"),
];