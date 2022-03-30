const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const dirPath = path.join(__dirname, '/main-page/index.html')

app.use(express.static("main-page"));

app.use('/flappy-bird', express.static('flappy-bird'));



// app.get("/", function(req, res) {
//     res.sendFile(dirPath);
// })

app.listen(5000, () => {
    console.log("Server Ligado")
})

