const path = require('path')
const express = require("express");
const cors = require("cors");
const baseURL = "https://localhost:4444"
const app = express();
const port = 4444
const{getItems} = require('./controller.js')
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "./../public")));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

// app.get('/api/items', (req, res) => {
//     try {
//         res.status(200).send(items)
//     } catch (error) {
//         console.log('ERROR GETTING ITEMS', error)
//         res.sendStatus(400)
//     }
// })


app.get(`/api/items`, getItems)



app.listen(4444, () => console.log("Server running on 4444"));


