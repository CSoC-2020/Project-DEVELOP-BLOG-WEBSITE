const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = mongoose.model('user', userSchema)

const createUser = async (username, password) => {

    try {
        let hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({
            username: username,
            password: hashedPassword
        })

        await user.save()

        return user
    } catch (e) {
        return throw e
    }
}

const comparePassword = async (user, password) => {
    try {
        const result = await bcrypt.compare(user.password, password)
        return result

    } catch (e) {
        throw e
    }
}

module.exports = {
    User,
    createUser,
    comparePassword
}