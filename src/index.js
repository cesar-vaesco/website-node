const express = require('express');
const app = express();
const path = require('path');
const colors = require('colors');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //Se le indica a node donde va a ir para consultar las vistas y renderizarlas
app.set('view engine', 'ejs');
//middlewares


//routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'First webSite'
    });

});

//static files


// listening the server Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.random);
})