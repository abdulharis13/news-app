const Joi = require('joi');

const loginSchema = Joi.object({

    email: Joi.string()
        .required()
        .min(4)
        .max(50)
        .email(),
    password: Joi.string()
        .min(3)
        .max(50)
        .required()
})

module.exports = loginSchema;