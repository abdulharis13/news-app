const express = require('express');
const { redirectMiddleware } = require('../../middleware')
const { Post } = require('../../models')

const router = express.Router();

router.post('/post-content', redirectMiddleware, async ( req,res ) => { 
    const { user } = res.locals;
    const { judul, content } = req.body;
    
    const post = new Post ({
        judul,
        content,
        author: user._id,
        createdAt: new Date()
    });
    
    await post.save()
    res.redirect('/contents');
});

module.exports = router;