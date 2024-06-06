const express = require('express')

const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    console.log(`############ ~ file: index.js:6 ~ app.get ~ req:`, JSON.stringify(req.headers));
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})