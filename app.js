const express = require('express')
const app = express()
const timeout = require('connect-timeout')
const compression = require('compression')

app.use(compression())
app.use(timeout('60s'))
app.use(express.json())
app.use(express.urlencoded({
	extended: false
}))

module.exports = app