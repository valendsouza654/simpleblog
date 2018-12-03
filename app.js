const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
app.use(bodyParser.json())

app.set('views',)

// dependencies
const { User, Blog } = require('./sequelize')

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

