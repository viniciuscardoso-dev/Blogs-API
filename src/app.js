const express = require('express');
// const routesUser = require('./routes/user.route');
const routeLogin = require('./routes/login.route');
const midError = require('./middlewares/error'); 

// implementacao do token

const app = express();

app.use(express.json());

// utilizacao do token 

app.use('/login', routeLogin);
// app.use('/user', routesUser);

app.use(midError);

module.exports = app;
