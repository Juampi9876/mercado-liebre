const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const publicPath = path.resolve('public');

app.set("port",process.env.PORT || 3000)

app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/register.html', function(req, res) {
    res.sendFile(path.resolve('./views/register.html'));
});
app.post('/register', function(req, res) {
    res.send(req.body);
});

app.get('/login.html', function(req, res) {
    res.sendFile(path.resolve('./views/login.html'));
});
app.post('/login', function(req, res) {
    res.send(req.body);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});