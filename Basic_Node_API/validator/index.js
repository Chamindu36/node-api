const {body, validationResult} = require('express-validator');
const express = require("express");
const router = express.Router();

exports.createPostValidator = router.post('/create',
    // Title validation
    body('title', "Write a proper title").notEmpty(),
    body('title', "Title must be between 4 to 150 chars").isLength({
        min: 4,
        max: 150,
    }),
    // Body Validation
    body('body', "Write a proper body").notEmpty(),
    body('body', "Body must be between 4 to 2000 chars").isLength({
        min: 4,
        max: 2000,
    }),
    (req, res, next) => {
        // Check for Errors
        const errors = validationResult(req);
        // If error show the first one that happen
        if (!errors.isEmpty()) {
            console.log(errors.isEmpty())
            const firstError = errors.array()[0].msg;
            return res.status(400).json({error: firstError});
        }

        // Proceed to next middleware
        next();
    },
);