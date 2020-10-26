const apilogin = require('./login');
const webLogin = require('./loginView');
const webLogout = require('./logout');

module.exports = [
    apilogin,
    webLogin,
    webLogout
];