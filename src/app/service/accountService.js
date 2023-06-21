const con = require('../configdb/connect')

class AccountService {
    insert(account) {
        var sql = `INSERT INTO nguoidung (taikhoan, matkhau, hoten, avatar) VALUES ('${account.username}', '${account.password}','${account.name}','${account.avatar}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    }
    check(username) {
        return new Promise((resolve, reject) => {
            con.query(`select * from nguoidung where taikhoan = '${username}'`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    updateAvatar(anhdaidien, taikhoan) {
        return new Promise((resolve, reject) => {
            var sql = `UPDATE nguoidung SET avatar = '${anhdaidien}' WHERE taikhoan = '${taikhoan}'`;
            con.query(sql, function (error, result) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.affectedRows + " đã được cập nhật");
            });
        })

    }

    findAvatar(username) {
        return new Promise((resolve, reject) => {
            con.query(`select avatar from nguoidung where taikhoan = '${username}'`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }


}

module.exports = new AccountService()