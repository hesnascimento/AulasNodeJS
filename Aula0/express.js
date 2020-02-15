const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.json())

app.use(express.static('./public'))

app.get('/health', (_, res) => {
    res.json({
        heath: true
    })
})

app.use(routes)

module.exports = app
