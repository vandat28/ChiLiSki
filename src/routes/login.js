var express = require('express')
var router = express.Router()

const loginController = require("../app/controller/LoginController")

router.post('/',loginController.login)
router.get('/', loginController.show)


module.exports = router 