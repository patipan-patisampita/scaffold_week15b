const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//http://localhost:3000/
app.use('/', indexRouter);
//http://localhost:3000/users
app.use('/users', usersRouter);

//Set EJS template engine
app.set('view engine','ejs')
http://localhost:3000/home
app.use('/home',homeRouter)

module.exports = app;
