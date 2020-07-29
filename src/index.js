const express = require('express');
const app = express();
const path = require('path');
const colors = require('colors');


//Settings - configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //Se le indica a node donde va a ir para consultar las vistas y renderizarlas
//Decirle a node que va a leer las vistas con extensión html y las va arenderizar como ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares


//routes
app.use(require('./routes/index'));
//static files


// listening the server Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.random);

})