const express = require('express');

const { redirectMiddleware } = require('../../middleware')
const { Post, Admin } = require('../../models');
const { getAdditionalData } = require('../../utils');

const router = express.Router();

router.get('/contents', redirectMiddleware, async (req, res) => {
    const { user } = res.locals;
    const posts = await Post.find({}).select('-__v')
    const promises = await Promise.all(posts.map(async el => {
        return {
            judul: el.judul,
            content: el.content,
            author: await getAdditionalData(el.author, Admin),
            createdAt: el.createdAt
        }
    }));
    const data = {
        posts: promises,
        user
    };
    res.render('listContent', data);
});
module.exports = router;

//monolithic semua view ada di processing
//render (untuk menampilkan) , redirect (untuk melempar ke kondisi lain)