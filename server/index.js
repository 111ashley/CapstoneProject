const path = require('path')
const express = require("express");
const cors = require("cors");
const baseURL = "https://localhost:4444"
const app = express();
const port = 4444
const{getItems, getList, addToWantedList, removeFromWantedList, postDate} = require('./controller.js')
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "./../public")));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})
app.get('/node_modules/axios/dist/axios.min.js', function(req, res){
    res.sendFile(path.join(__dirname, '../node_modules/axios/dist/axios.min.js'))
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
app.get(`/api/list`, getList)
app.post(`/api/wantedlist/add`, addToWantedList)
app.delete (`/api/wantedlist/remove`,removeFromWantedList)
app.post(`api/dates`,postDate)


app.listen(4444, () => console.log("Server running on 4444"));


