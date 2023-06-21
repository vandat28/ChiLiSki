const rankService = require('../service/rankService')

class RankController {
    async show(req, res) {
        res.locals.title = 'Xếp hạng';
        const username = req.cookies.username
        if (username) {
            await rankService.createTable(username)
            let listRank = await rankService.rankScore(username)
            await rankService.dropTable(username)
            res.render('rank', { listRank })
        } else {
            res.render('blankPage')
        }

    }

}

module.exports = new RankController()