const tampilAdmin = require('./admin');
const tampilLogin = require('./login');
const dashboard = require('./dashboard');
const content = require('./content');


const routers = [
    ...tampilAdmin,
    ...tampilLogin,
    ...dashboard,
    ...content
];

const router = (arg) => {
    arg.use(routers);
};

module.exports = router;