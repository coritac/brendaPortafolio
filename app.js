const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.listen(4000, function (){
    console.log('Servidor corriendo')
})