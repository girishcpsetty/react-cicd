const express = require('express')
const app = express();

app.get('/names', (req, res) => {
    res.send("Eaglei");
})

app.listen(6000, () => {
    console.log("Server is Running on port 6000");
})