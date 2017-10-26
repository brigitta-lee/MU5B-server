const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var MovieSearch = require('./MovieSearch.js');

const cors = require('cors');

var server = require('http').createServer(app);

const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use(cors());

app.get('/', function(req, res) {
  res.send("Hello World");
})

app.get('/api', function (req, res) {
  res.send(MovieSearch);//when I get to localhost:3000/api, I'm not getting the data that's in the console from MovieSearch
});

app.listen(port,()=>{console.log('listening on http://localhost:'+ port)
console.log(__dirname)});

// module.exports = app;
