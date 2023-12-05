const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
app.use(cors())
//public 
app.use(express.static(path.join(__dirname, '/public')))

//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//HTTP logger
const morgan = require('morgan')
app.use(morgan('combined'))

//Templete engine
const exphbs = require('express-handlebars')
const handlebars = exphbs.create({
  extname: '.hbs'
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Handlebars index start 1
const Handlebars = require('handlebars');
Handlebars.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});

//Cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Router init
const route = require('./routes/route')
route(app)


module.exports = app