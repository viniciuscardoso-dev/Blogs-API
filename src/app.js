const express = require('express');
const routesUser = require('./routes/user.route');
require('express-async-errors');

const midError = require('./middlewares/error'); 
const routeLogin = require('./routes/login.route');

const app = express();

app.use(express.json());

app.use('/login', routeLogin);
app.use('/user', routesUser);

app.use(midError);

module.exports = app;
