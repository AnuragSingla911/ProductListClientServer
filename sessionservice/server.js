var express = require('express');
const userController = require('./userController')(express);
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use("/", bodyParser.json());
app.use("/", userController);

var cookieParser = require('cookie-parser')
app.use(cookieParser())

//redis client
var client = require('./redisClient');
//mongo client
var db = require('./mongo/mongodb');
db.init(()=>{
   console.log("db connection status");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})