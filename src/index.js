const express = require('express');
const app = express();
const colors = require('colors');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares


//routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//static files


// listening tje server Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.random);
})