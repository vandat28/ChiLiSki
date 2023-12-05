const courseService = require('../service/courseService')

class ApiAdminController {
    async getCourse(req, res) {
        let id = req.query.id
        let course = await courseService.findCourseByCaterogy(id)
        res.json(course)
    }

    async saveCourse(req, res) {
        let course = req.body
        let result = await courseService.insertCourse(course)
        if (result == 1) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    }

    async deleteCourse(req, res) {
        let id = req.params.id
        let result = await courseService.deleteCourseById(id)
        if (result == 1) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    }



    async getCategory(req, res) {
        let category = await courseService.findCaterogy()
        res.json(category)
    }

    async saveCategory(req, res) {
        let categoryName = req.body.categoryName
        let result = await courseService.insertCategory(categoryName)
        if (result == 1) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    }

    async deleteCategory(req, res) {
        let id = req.params.id
        let result = await courseService.deleteCategoryById(id)
        if (result == 1) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    }

    async updateCategory(req, res) {
        let id = req.params.id
        let name = req.body.name
        let result = await courseService.updateCategoryById(id, name)
        if (result == 1) {
            res.json('Thành công')
        } else {
            res.json('Thất bại')
        }
    }
}

module.exports = new ApiAdminController()