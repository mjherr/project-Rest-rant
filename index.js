require('dotenv').config()

const express = require('express')
const app = express()

//Homepage
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render('home')
})

//Places route
app.use('/places', require('./controllers/places'))

//404 Page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)