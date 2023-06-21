const con = require('../configdb/connect')

class QuestionService{
    countQuestion(idkhoahoc){
        return new Promise((resolve, reject) => {
            con.query(`SELECT COUNT(cauhoi) AS socau FROM cauhoi where idkhoahoc = ${idkhoahoc}`, function(error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                  }
                resolve(result);
            });
        })
    }
}

module.exports = new QuestionService()