var express = require('express');
var mongoose = require('mongoose');
var compression = require('compression');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var app = express();

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://admin:intergrupoAdmin@ds149613.mlab.com:49613/spatv', { useMongoClient: true });

mongoose.connection.on('error', (err) => {
    console.log('Oops!!, ocurrio un error al conectar con la base de datos'+err);
})

mongoose.connection.on('connected', () => {
    console.log('Conectado a la db');
});

app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Routes */
routes(app);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});