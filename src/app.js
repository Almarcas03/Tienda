const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  mysql = require('mysql'),
  myConnection = require('express-myconnection');
const router = require('./routes/tienda');

const app = express();

// Rutas importantes
const customerRoutes = require('./routes/tienda');

// Config
app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'tienda'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Rutas
app.use('/', router);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`servidor en el puerto: ${app.get('port')}`);
});
