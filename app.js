// importing modules
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const ejs = require('ejs')
require('passport')

// middlewares
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())


// routes
const mainRoute = require('./routes/main')
app.use(mainRoute)
const authRoute = require('./routes/auth')
app.use('/auth', authRoute)


// starting server
mongoose.connect('mongodb://localhost:27017/BLOG', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server started at port ${process.env.PORT || 3000}`)
    })
}).catch(e => {
    console.log(e)
})