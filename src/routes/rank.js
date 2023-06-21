var express = require('express')
var router = express.Router()

const rankController = require('../app/controller/RankController')

router.get('/',rankController.show)

module.exports = router