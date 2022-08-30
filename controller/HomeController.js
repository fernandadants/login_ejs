class HomeController{
    /*Criando os elementos do homecontroller*/
    index(req, res){
        res.render('pages/index');
    }
    usuarios(req,res){
        res.render('pages/usuarios');
    }
}
module.exports = new HomeController();