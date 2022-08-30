const {Router} = require('express');
const Home = require('../controller/HomeController');
const Session = require('../controller/SessionController')
const auth = require('../middleware/auth')

const routes = new Router();

//Definindo rotas
routes.get('/', Home.index);
routes.post('/logar', Session.logar);
routes.get('/home', Session.home);
routes.get('/logout', Session.logout);
routes.get('/usuarios', Home.usuarios);

routes.get('/', (req, res) => {
    res.render('pages/index')
})

module.exports = routes;