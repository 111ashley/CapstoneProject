const path = require('path')
const express = require("express");
const cors = require("cors");
const baseURL = "https://localhost:4444"
const app = express();
const port = 4444
const{getItems, getList, getEvent, addToList, removeFromList, postEvent} = require('./controller.js')
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "./../public")));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})
app.get('/node_modules/axios/dist/axios.min.js', function(req, res){
    res.sendFile(path.join(__dirname, '../node_modules/axios/dist/axios.min.js'))
})

app.get(`/api/items`, getItems)
app.get(`/api/list`, getList)
app.get(`/api/events`, getEvent)
app.post(`/api/wantedlist/add`, addToList)
app.post(`/api/events`,postEvent)
app.delete (`/api/wantedlist/remove/:id`,removeFromList)
// app.delete (`/api/wantedlist/remove`,removeFromWantedList)



app.listen(4444, () => console.log("Server running on 4444"));


