const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
}).catch(err=>{
    console.log(err)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at port ${process.env.PORT || 3000}`)
})