const con = require('../configdb/connect')

class SearchService {
    findByTxt(searchTxt) {
        return new Promise((resolve, reject) => {
            con.query(`select * from khoahoc where ten COLLATE UTF8_GENERAL_CI like '%${searchTxt}%' `, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }
}

module.exports = new SearchService()