var express = require('express')
var router = express.Router()

const apiAdminController = require("../app/controller/ApiAdminController")


router.get('/course', apiAdminController.getCourse)
router.post('/course', apiAdminController.saveCourse)
router.delete('/course/:id', apiAdminController.deleteCourse)

router.get('/category', apiAdminController.getCategory)
router.post('/category', apiAdminController.saveCategory)
router.delete('/category/:id', apiAdminController.deleteCategory)
router.put('/category/:id', apiAdminController.updateCategory)


module.exports = router 