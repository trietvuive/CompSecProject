const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 3000)
