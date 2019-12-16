const about = (req, res) => res.render('about')
const add = (req, res) => res.render('partials/add')

const index = async({ Whos }, req, res) => {
    const docs = await Whos.find({})
    res.render('index', { docs })
}

const addProcess = async({ Whos }, req, res) => {
    const who = new Whos(req.body)
    try {
        await who.save()
        res.redirect('/#services')
    }catch(e) {
        const errors = Object.keys(e.errors)
        res.render('partials/add', { errors })
    }
}

const deletes = async({ Whos }, req, res) => {
    await Whos.deleteOne({ _id: req.params.id })
    res.redirect('/#services')
}

const editForm = async ({ Whos }, req, res) => {
    const who = await Whos.findOne({ _id: req.params.id })
    res.render('partials/edit', { who })
}

const editProcess = async({ Whos }, req, res) => {
    const who = await Whos.findOne({ _id: req.params.id })
    who.name = req.body.name
    who.role = req.body.role
    who.email = req.body.email
    try {
        await who.save()
        res.redirect('/#services')
    }catch(e) {
        const errors = Object.keys(e.errors)
        res.render('partials/edit', { who, errors })
    }
}

module.exports = {
    about, index, add, addProcess, deletes, editForm, editProcess
}