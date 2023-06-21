const scoreService = require('../service/scoreService')
class LogoutController{
    async save(req,res){
        const id = req.query.id;
        const score = req.query.score;
        const username = req.cookies.username
        console.log(id,score,username)
        await scoreService.insert(id,username,score)
        res.redirect('/course')
    }



}

module.exports = new LogoutController()