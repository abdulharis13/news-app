const redirectMiddleware = (req, res, next) => {
    if (!req.session || !req.session.user || !req.session.token ) {
        res.redirect('/login')
    }
    next()
}
module.exports = redirectMiddleware;