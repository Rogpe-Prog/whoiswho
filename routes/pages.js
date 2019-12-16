const express = require('express')
const pagesController = require('../controllers/pages')

const router = express.Router()

const Whos = require('../models/schemadb')
const models = {
    Whos
}

router.get('/', pagesController.index.bind(null, models))
router.get('/about', pagesController.about)
router.get('/add', pagesController.add)

router.post('/add', pagesController.addProcess.bind(null, models))

router.get('/deletes/:id', pagesController.deletes.bind(null, models))

router.get('/edit/:id', pagesController.editForm.bind(null, models))
router.post('/edit/:id', pagesController.editProcess.bind(null, models))

module.exports = router