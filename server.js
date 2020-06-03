const app = require('./app')
const mongoose = require('mongoose')

/*
* Connecting mongoose
* mongoose needs a mongodb url to connect,
* spin up your mongoose database and add
* the mongoose url inside the .env file.
* */
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
}).catch(err=>{
    console.log(err)
})

// Starting the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at port ${process.env.PORT || 3000}`)
})