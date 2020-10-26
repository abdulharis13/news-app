const Joi = require('joi');

const adminSchema = Joi.object({
    namaAdmin: Joi.string()
        .min(3)
        .max(50)
        .required(),
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

module.exports = adminSchema;