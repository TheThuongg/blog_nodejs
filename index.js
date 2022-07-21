const express = require('express')
const app = express()
const port = 2222;

app.get('/', function (req, res) {
  res.send('Hello Thuong')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));