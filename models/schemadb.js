const mongoose = require('mongoose')

const WhoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: String,
    email: String,
    urlAvatar: String,
    comments: [String]
})

const WhoisWho = mongoose.model('Who', WhoSchema)

module.exports = WhoisWho