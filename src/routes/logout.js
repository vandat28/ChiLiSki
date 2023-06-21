var express = require('express')
var router = express.Router()

const logoutController = require("../app/controller/LogoutController")

router.get('/',logoutController.logout)

module.exports = router 