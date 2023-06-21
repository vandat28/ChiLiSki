var express = require('express')
var router = express.Router()

const registerController = require('../app/controller/RegisterController')


router.post('/',registerController.register)
router.get('/',registerController.show)

module.exports = router