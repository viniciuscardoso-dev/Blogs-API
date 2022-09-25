const express = require('express');
const routesUser = require('./routes/user.route');
require('express-async-errors');
const midError = require('./middlewares/error'); 
const routeLogin = require('./routes/login.route');

// implementacao do token

const app = express();

app.use(express.json());

// utilizacao do token 

app.use('/login', routeLogin);
app.use('/user', routesUser);

app.use(midError);

module.exports = app;
