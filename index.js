const express = require('express')

const app = express()

app.get('/teste', (request, response) => {
    return response.json({message: 'Server is up!!!'})
})

app.listen(3333)