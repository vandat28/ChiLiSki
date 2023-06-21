var express = require('express')
var router = express.Router()
const multer  = require('multer')
const parentController = require('../app/controller/ParentController')

const upload = multer({ dest: './src/public/uploads/'})

router.post('/profile',upload.single('avatar'),parentController.upload)
router.get('/',parentController.show)


module.exports = router