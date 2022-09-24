const express = require('express');
// const routesUser = require('./routes/user.route');
const routeLogin = require('./routes/login.route');

// importar middleware de erro

// implementacao do token

const app = express();

app.use(express.json());

// utilizacao do token 

app.use('/login', routeLogin);
// app.use('/user', routesUser);

// app.use middleware de erro

module.exports = app;
