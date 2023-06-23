const courseService = require('../service/courseService')
const questionService = require('../service/questionService')

class CourseController {
    async show(req, res) {
        res.locals.title = 'Khóa học';
        let list1 = await courseService.findCourseByCaterogy(1)
        let list2 = await courseService.findCourseByCaterogy(2)
        res.render('course/course', { list1, list2 })


    }

    async detail(req, res) {
        res.locals.title = 'Chi tiết khóa học';
        let questions = []
        let id = req.params.id
        let course = await courseService.findCourseById(id)
        let list = await courseService.findCourseRelation(id)
        let listQuestion = await courseService.findQuestionByIdCourse(id)
        for (let i = 0; i < listQuestion.length; i++) {
            let answers = await courseService.findAnswerByIdQuestion(listQuestion[i].id)
            questions.push(new Object({
                question: listQuestion[i].cauhoi,
                answers,
            }))
        }
        res.render('course/detail', { course, list, questions, id })

    }

    async result(req, res) {
        let score = 0
        let obj = req.body
        let id = req.params.id;
        let questions = []
        let checked = []
        const quantity = await questionService.countQuestion(id)
        for (const key in obj) {
            try {
                const result = await courseService.checkAnswer(obj[key])
                if (result[0].ketqua === 1) {
                    score += 100 / quantity[0].socau
                }
                checked.push(result[0].id)
            } catch (error) {
                console.log(error)
            }
        }
        let listQuestion = await courseService.findQuestionByIdCourse(id)
        for (let i = 0; i < listQuestion.length; i++) {
            let answers = await courseService.findAnswerByIdQuestion(listQuestion[i].id)
            let answerTrue
            answers.forEach(e => {
                if (e.ketqua === 1) {
                    answerTrue = e.id
                }
            })
            questions.push(new Object({
                question: listQuestion[i].cauhoi,
                answers,
                answerTrue,
                checked: checked[i]
            }))
        }
        res.render('course/result', { score, id, questions })
    }





}

module.exports = new CourseController()