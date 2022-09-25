const express = require('express');
require('express-async-errors');

const midError = require('./middlewares/error'); 
const routesUser = require('./routes/user.route');
const routeLogin = require('./routes/login.route');
const routeCategory = require('./routes/category.route');

const app = express();

app.use(express.json());

app.use('/login', routeLogin);
app.use('/user', routesUser);
app.use('/categories', routeCategory);

app.use(midError);

module.exports = app;
