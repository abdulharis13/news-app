const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const Handlebars = require('handlebars');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const { host, port, sessionConfig } = require('../../config');
const router = require('../routers');
const dbConnect = require('../connection/dbconnect');
const { sessionMiddleware } = require('../middleware');

const viewPath = path.join(__dirname, '../views');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect(mongoose);

app.use(cookieParser(sessionConfig.secret));
app.use(session(sessionConfig));

app.engine('hbs', hbs({
    extname: '.hbs',
    layoutsDir: path.join(viewPath, 'layout'),
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');
app.set('views', viewPath);

app.use(sessionMiddleware);

router(app);

app.listen(port, () => console.log(`Server running at http://${host}:${port}`));
//     const { user, token } = req.session;
//     if (user) {
//         res.locals.user = user;
//     }
//     if (token) {
//         res.locals.token = token;
//     }
//     next();
// });
