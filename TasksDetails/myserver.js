//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./route');



//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');


mongoose.connection.on('connected', function () {
        console.log("connected to database mongoDB @27017");
});

//on connection
mongoose.connection.on('error', function (err) {
    if (err) {
        console.log("error in database connection:");
    }
});

//port number
const port = 3000;




//adding middleware

app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//app routes
app.use('/api', route);

app.get('/', function(req, res){

    res.send('footbar');
});


app.listen(port, function () {
    console.log('server started at port : ' + port);

});