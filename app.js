const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3030

app.set('port', port)

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')))
app.use(express.static(path.resolve(__dirname, './public')))

app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views', 'register.html')))
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views', 'login.html')))


app.listen(app.get('port'), () => {
    console.log(`Service started and running on port ${port}`)
})

