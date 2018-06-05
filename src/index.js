const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//SETTING

    //Usar puerto del servidor, sino usar el 4000
app.set('port', process.env.PORT || 4000);

//MIDDLEWARE
    //Muestra peticiones,runas y tiempo de respuesta.
app.use(morgan('dev'));
    //Servidor entiendo formato Json desde el navegador. Podemos guardar base de datos...
app.use(express.json());


//ROUTES
app.use('/tasks',require('./routes/tasks'));

//STATIC FILES
    //Enviamos la carpeta public al navegador
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});