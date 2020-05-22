const express = require('express')

// middleware
const app = express()
app.use(express.raw())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
const indexRoute = require('./routes/main')
app.use('/',indexRoute)

module.exports = app