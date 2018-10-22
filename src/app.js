const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//import routes
const customerRoutes = require('./routes/customer');


//settings 
//express por
app.set('port',process.env.PORT || 3000);
//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'crud_node_mysql'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/',customerRoutes);

//statics files 
app.use(express.static(path.join(__dirname,'public')));

//starting the server
app.listen(app.get('port'), () => {
	console.log('Server on port 3000');
});