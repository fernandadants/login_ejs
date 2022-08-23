class HomeController{
    /*Criando os elementos do homecontroller*/
    index(req, res){
        res.render('pages/index');
    }
}
module.exports = new HomeController();