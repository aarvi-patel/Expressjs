const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../templets/index.html'))
    res.render('../home');
});


router.get('/blog', (req, res) => {
// res.sendFile(path.join(__dirname,'../templets/bloghome.html'))
res.render('bloghome'), {
    blogs: blogs
}
});


router.get('/blogpost/:slug', (req, res) => {
    // console.log(req.params.slug)
    myblog = blogs.filter((e) => {
        return e.slug = req.params.slug
    });

    console.log(myblog)
    res.render('blogpage', {
        title: myblog[0].title,
        Content: myblog[0].Content

        // console.log(myblog)
        // res.sendFile(path.join(__dirname, '../templets/blogpage.html'))
    });


    module.exports = router
});