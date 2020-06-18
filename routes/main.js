const router = require('express').Router()
const passport = require('passport')
const Post = require('../model/post')

router.route('/')
    .get((req, res) => {
        return res.render('home', {
            posts: []
        })
    })

router.route('/about')
    .get((req, res) => {
        return res.render('about', {})
    })

router.route('/contact')
    .get((req, res) => {
        return res.render('contact', {})
    })


router.route('/compose')
    .get(async (req, res) => {
        try {
            const post = await Post.find({})

            return res.render('compose', {posts: post})
        } catch (e) {
            return res.status(404).json(e)
        }

    })
    .post(passport.authenticate('jwt', {session: false}), async (req, res) => {
        const {title, content} = req.body
        const id = req.user._id

        try {
            const post = new Post({
                title: title,
                content: content,
                userId: id
            })

            let response = await post.save()

            return res.status(201).json(response)
        } catch (e) {
            return res.status(404).json(e)
        }
    })

module.exports = router