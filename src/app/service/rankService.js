const con = require('../configdb/connect')

class RankService {
    rankScore(tableName) {
        return new Promise((resolve, reject) => {
            con.query(`select sum(max_diemso) as tongdiem,tencon,hoten from ${tableName}
            group by taikhoan 
            order by tongdiem desc limit 3`,
                function (error, result, fields) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                });
        })
    }
    createTable(tableName) {
        return new Promise((resolve, reject) => {
            con.query(`create table ${tableName} as
            SELECT a.taikhoan, a.idkhoahoc, MAX(diemso) AS max_diemso,c.tencon,c.hoten
            FROM hoc a, khoahoc b, nguoidung c
            where b.id = a.idkhoahoc and c.taikhoan = a.taikhoan
            GROUP BY idkhoahoc,taikhoan;`,
                function (error, result, fields) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                });
        })
    }
    dropTable(tableName) {
        return new Promise((resolve, reject) => {
            con.query(`drop table ${tableName} `,
                function (error, result, fields) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                });
        })
    }
}

module.exports = new RankService()