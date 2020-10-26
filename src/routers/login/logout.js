const express = require('express');

const router = express.Router();

router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

module.exports = router;