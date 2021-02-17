const express = require('express')
const morgan = require('morgan')
const app = express()
require('./database')
const routes = require('./routes')

app.use(express.json())
app.use(morgan('dev'))
app.use(routes)

app.listen(3333, () => console.log(`http://localhost:${3333}`))