const http = require('http')
const express = require('express')

const app = express()

const port = process.env.PORT || '3000'

const server = http.createServer(app)
const router = express.Router()

const inter = 0

server.listen(port)

if (server !== null) {
  console.log('API rodando ' + port)
} else {
  console.log('error do server')
}
