const router = require('express').Router()
const {
    login,
    signup
} = require('../controller/auth')
const passport = require('passport')

router.route('/login')
    .get()
    .post(passport.authenticate('local',{session: false}), login)

router.route('/signup')
    .get()
    .post(signup)

module.exports = router