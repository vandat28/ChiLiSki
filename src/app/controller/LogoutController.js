class LogoutController{

    logout(req,res){
        res.clearCookie('username');
        res.clearCookie('name');
        res.clearCookie('avatar');
        res.redirect('/')
    }



}

module.exports = new LogoutController()