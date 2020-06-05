// importing modules
const jwt = require('jsonwebtoken')
const User = require('../model/user')

exports.login = async (req,res) => {

}

exports.signup = async (req,res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({username: username})

        if(user) {
            return res.status(401).json({message: 'username already exists'})
        }

        const newUser = new User({
            username: username,
            password: password
        })

        let response = await newUser.save()

        let token = jwt.sign({id: response._id, username: response.username},'secret')

        return res.status(200).json({token: token, message: 'Sign up successful'})
    }catch (e) {
        return res.status(404).json(e)
    }
}