const express = require('express');
const app = express();
const path = require('path');

app.set('port', 3030)

app.listen(app.get('port'), ()=> console.log('Servidor corriendo'));

app.get('/', (req,res) =>   res.sendFile(path.resolve(__dirname,'./views/home.html')))
app.use(express.static(path.resolve(__dirname,'./public')))

app.get('/register', (req,res)=>res.sendFile(path.resolve(__dirname,'./views', 'register.html')))
app.get('/login', (req,res)=>res.sendFile(path.resolve(__dirname,'./views', 'login.html')))
