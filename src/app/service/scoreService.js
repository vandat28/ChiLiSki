const con = require('../configdb/connect')

class ScoreService{
    insert(idkhoahoc,taikhoan,diem){
        return new Promise((resolve, reject) => {
            con.query(`insert into hoc(idkhoahoc,taikhoan,diemso) values(${idkhoahoc},'${taikhoan}',${diem});`, function(error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                  }
                resolve(result.affectedRows);
            });
        })
    }
}

module.exports = new ScoreService()