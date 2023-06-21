class HomeController{
    show(req,res){
        res.locals.title = 'Trang chủ';
        res.render('home')
    }


}

module.exports = new HomeController()