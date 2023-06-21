const con = require('../configdb/connect')

class ParentService{
    findCourseAndScore(taikhoan){
        return new Promise((resolve, reject) => {
            con.query(`SELECT a.idkhoahoc, MAX(diemso) AS max_diemso,b.ten,b.hinhanh 
            FROM hoc a, khoahoc b
            where a.taikhoan = '${taikhoan}' and b.id = a.idkhoahoc
            GROUP BY idkhoahoc;`,
            function(error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                  }
                resolve(result);
            });
        })
    }
}

module.exports = new ParentService()