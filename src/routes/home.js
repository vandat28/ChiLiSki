var express = require('express')
var router = express.Router()

const homeController = require("../app/controller/HomeController")


router.get('/', homeController.show)


module.exports = router 