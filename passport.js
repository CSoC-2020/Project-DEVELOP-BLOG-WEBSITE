const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./model/user')


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, cb) => {
    try {
        const user = await User.findOne({username: username})

        if (!user) {
            return cb(null, false, {message: 'Incorrect username'})
        }
        // have to write check for password

        return cb(null, user, {message: 'Login successful'})

    } catch (e) {
        return cb(e)
    }
}))