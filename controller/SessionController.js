const session = require("express-session");

class SessionController{
    async home(req, res){
        res.render('pages/home');
    }
    logar(req, res){
        var user = {
            email: 'chico@email.com',
            senha: '123456'
        }
        const{email, senha} = req.body;

        //Testar se usuário existe
        if (!(email === user.email)) {
            req.session.logado = false;
            return res.render('pages/index');
        }
        //Testar se senha corresponde ao email
        if (!(email === user.email && senha === user.senha)) {
            req.session.logado = false;
            return res.render('pages/index');
        }
        req.session.logado = true;
        return res.redirect('/home');
        }

        logout(req, res) {
        req.session.logado = false;
        return res.redirect('/');
    }
}

module.exports = new SessionController();