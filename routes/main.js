const router = require('express').Router()

router.route('/')
    .get((req,res) => {
        return res.render('home',{
            posts: []
        })
    })

router.route('/about')
    .get((req,res) => {
        return res.render('about', {})
    })

router.route('/contact')
    .get((req,res) => {
        return res.render('contact', {})
    })

module.exports = router