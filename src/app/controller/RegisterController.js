const accountService = require('../service/accountService')
const bcrypt = require('bcrypt');

class RegisterController {

    show(req, res) {
        const username = req.cookies.username
        if (username) {
            res.redirect('/')
        } else {
            res.render('register', { layout: false })
        }
    }

    async register(req, res) {
        let account = await accountService.check(req.body.username)
        if (account.length > 0) {
            let account = req.body
            let msg = 'Tài khoản đã được sử dụng'
            res.render('register', { msg, account, layout: false })
        } else {
            if (req.body.rePassword === req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                let account = new Object({
                    username: req.body.username,
                    password: hashedPassword,
                    name: req.body.name,
                    avatar: 'anhdaidienchung'
                })
                accountService.insert(account)
                const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000
                res.cookie('name', req.body.name, { maxAge: thirtyDaysInMilliseconds })
                res.cookie('username', req.body.username, { maxAge: thirtyDaysInMilliseconds })
                res.cookie('avatar', account.avatar, { maxAge: thirtyDaysInMilliseconds })
                res.redirect('/')
            } else {
                let account = req.body
                let msg1 = 'Mật khẩu chưa khớp'
                res.render('register', { msg1, account, layout: false })
            }
        }
    }

}

module.exports = new RegisterController()