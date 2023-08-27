const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(_dirname, '/frontend/build')));

app.get('/names', (req, res) => {
    res.send("Eaglei Annimal Detection Project");
})

app.listen(6000, () => {
    console.log("Server is Running on port 6000");
})