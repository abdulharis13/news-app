const sessionMiddleware = (req, res, next) => {
    const { user, token } = req.session;
    if (user) {
        res.locals.user = user;
    }
    if (token) {
        res.locals.token = token;
    }
    next();
};

module.exports = sessionMiddleware;