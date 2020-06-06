const router = require('express').Router()
const {
    login,
    signup
} = require('../controller/auth')

router.route('/login')
    .get()
    .post()

router.route('/signup')
    .get()
    .post(signup)

module.exports = router