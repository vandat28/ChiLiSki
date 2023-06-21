var express = require('express')
var router = express.Router()

const saveScoreController = require('../app/controller/SaveScoreController')


router.get('/',saveScoreController.save)


module.exports = router