const express = require('express')
const path = require('path')
require('./db/mongoose')
const transactionRouter = require('./routers/transaction')
const customerRouter = require('./routers/customer')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())
app.use(transactionRouter)
app.use(customerRouter)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('homepage')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})