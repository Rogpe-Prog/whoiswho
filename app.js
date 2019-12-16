const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

const router = require('./routes/pages')

const mongo = process.env.MONGODB || 'mongodb+srv://dbRogpe:dbRogpe2019@cluster0-ji7tk.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', router)

mongoose
    .connect(mongo, {useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log('Online... '+port)
        })
    })
    .catch(e => {
        console.log('Error: '+e)
    })
