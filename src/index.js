const express = require('express');
const app = express();
const path = require('path');
const colors = require('colors');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares


//routes
app.get('/', (req, res) => {
    // res.sendFile('./index.html');
    console.log(__dirname + '/views/index.html');
    console.log(path.join(__dirname, '/views/index.html'));
});

//static files


// listening tje server Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.random);
})