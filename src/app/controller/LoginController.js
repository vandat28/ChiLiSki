const accountService = require('../service/accountService')
const bcrypt = require('bcrypt');

class LoginController{

    show(req,res){
        const username = req.cookies.username
        if(username){
            res.redirect('/')
        }else{
            res.render('login',{layout: false})
        }  
    }

    async login(req,res){
        
        let username = req.body.username
        let password = req.body.password
        let account = await accountService.check(username)

        if(account.length > 0){ 
            let checker = await bcrypt.compare(password, account[0].matkhau)
            if(checker){
                const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000
                res.cookie('username', username,{ maxAge: thirtyDaysInMilliseconds })
                res.cookie('name',  account[0].hoten,{ maxAge: thirtyDaysInMilliseconds })
                res.cookie('avatar',  account[0].avatar,{ maxAge: thirtyDaysInMilliseconds })
                res.redirect('/')
            }else{
                let msg2 = 'Mật khẩu không dúng'
                res.render('login',{layout: false, msg2,username,password})
            }
        }else{
            let msg1 = 'Tài khoản không tồn tại'
            res.render('login',{layout: false, msg1 ,username,password})
        }
    }

}

module.exports = new LoginController()