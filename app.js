//Importanto express
const express = require('express');
var routes = require('./routes/routes')

//Importando rotas
var routes = require('./routes/routes');

//Instanciando o objeto app
const app = express();

//Define o template de renderização do html através do ejs
app.set('view engine', 'ejs');

//Define a pasta aonde ficarão os views
app.set("views", __dirname + "/views");

// Define que o app vai passar informações via Json:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Faz a definição de uma seção no express:
// Importa o módulo:
const session = require('express-session');

// Define o Proxy como ativo:
app.set('trust proxy', 1);

// Configura a sessão:
app.use(session({
    secret: '903901b49887dc49cf6718d41ddbcf495685a63e',
    resave: true,
    saveUninitialized: true,
    cookie: false
}));

// Define o uso das rotas:
app.use(routes);

//Variaveis de endereço
var hostname = "localhost";
const port = 3000;

//Abrindo servidor
app.listen(port, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port}`);
});








