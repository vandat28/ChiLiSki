const con = require('../configdb/connect')

class CourseService {
    findCourseByCaterogy(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM khoahoc where idloai = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findCourseById(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM khoahoc where id=${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findCourseRelation(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM khoahoc where idloai = (select idloai from khoahoc where id= ${id}) and not id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findQuestionByIdCourse(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM cauhoi where idkhoahoc = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findAnswerByIdQuestion(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM dapan where idcauhoi = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    checkAnswer(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM dapan where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }
}

module.exports = new CourseService()