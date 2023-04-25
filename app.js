const express = require('express')
const server = express()
const ejs = require('ejs')
const productRouter = require('./routes/product')

const PORT = 8887;

server.set('view engine', 'ejs')
server.set('views',__dirname + '/views');
server.use(express.static(__dirname + '/public'))


server.use('/', productRouter)

server.listen(PORT)