const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const homeRouter = require('./routes/home');//import router/home
const aboutRouter = require('./routes/about');//import router/about
const contatctRouter = require('./routes/contact');//import router/contact

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //http://localhost:3000/
app.use('/users', usersRouter); //http://localhost:3000/users

app.set('view engine','ejs')//Set EJS template engine
app.use('/home',homeRouter)//http://localhost:3000/home
app.use('/about',aboutRouter)//http://localhost:3000/about
app.use('/contact',contatctRouter)//http://localhost:3000/contact

module.exports = app;
