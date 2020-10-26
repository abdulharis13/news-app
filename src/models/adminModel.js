const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({
    namaAdmin: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    }
});
const AdminModel = mongoose.model('AdminModel', adminModel);

module.exports = AdminModel;