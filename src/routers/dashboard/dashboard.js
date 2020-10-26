const express = require('express');
const { redirectMiddleware } = require('../../middleware')
const router = express.Router();

router.get('/dashboard', redirectMiddleware, (req, res) => {
    const { user } = res.locals;
    const data = {
        user,
    };

    res.render('dashboard', data);
})

module.exports = router;