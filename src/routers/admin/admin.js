const express = require('express');
const { Admin } = require('../../models');
const { schemaAdmin } = require('../../schema');
const { encrypt } = require('../../utils');
const router = express.Router();

router.post('/add-admin', async ( req,res ) => {
    try {
        const { value, error } = schemaAdmin.validate(req.body);
        const {
            namaAdmin,
            email,
            password
        } = value;
        if (error) {
            throw new Error(error.message);
        };
        
        const passwordHash = encrypt(password);
        const admin = new Admin ({
            namaAdmin,
            email,
            password: passwordHash
        });
        await admin.save();
        res.send({ namaAdmin, email });
    } catch(e) {
        res.send({ message: e.message })
    }
});


module.exports = router;