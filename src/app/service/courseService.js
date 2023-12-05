const con = require('../configdb/connect');


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

    findCaterogy() {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM loai`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    insertCategory(category) {
        return new Promise((resolve, reject) => {
            con.query(`insert into loai(ten) values('${category}');`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.affectedRows);
            });
        })
    }

    insertCourse(course) {
        return new Promise((resolve, reject) => {
            con.query(`insert into khoahoc(ten,hinhanh,video,mieuta,idloai) values('${course.name}','${course.image}','${course.video}','${course.description}','${course.category}');`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.affectedRows);
            });
        })
    }

    deleteCourseById(id) {
        return new Promise((resolve, reject) => {
            con.query(`delete from khoahoc where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.affectedRows);
            });
        })
    }

    deleteCategoryById(id) {
        return new Promise((resolve, reject) => {
            con.query(`delete from loai where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.affectedRows);
            });
        })
    }
    updateCategoryById(id, name) {
        return new Promise((resolve, reject) => {
            con.query(`update loai set ten = '${name}' where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.affectedRows);
            });
        })
    }
}

module.exports = new CourseService()