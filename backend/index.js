const express = require('express')

const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());

app.use('/', express.static("web/dist/frontend/browser"));


// res.sendFile(__dirname + '/index.html');

app.get('/hello', (req, res) => {
    console.log(`############ ~ file: index.js:6 ~ app.get ~ req:`, JSON.stringify(req.headers));
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})