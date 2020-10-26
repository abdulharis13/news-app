require('dotenv').config();

const sessionConfig = {
    secret: 'rahasianegara',
    name: 'websaya',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 720000,
        sameSite: true
    }
};

const config = {
    host: process.env.HOST,
    port: process.env.PORT,
    sessionConfig
}

module.exports = config;