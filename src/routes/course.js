var express = require('express')
var router = express.Router()

const couseController = require('../app/controller/CourseController')


router.post('/result/:id', couseController.result)
router.get('/:id', couseController.detail)
router.get('/', couseController.show)


module.exports = router