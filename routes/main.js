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


router.route('/compose')
    .get((req,res) => {
        return res.render('compose',{})
    })

module.exports = router