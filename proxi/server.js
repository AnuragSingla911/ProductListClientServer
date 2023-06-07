var express = require('express');
const createUser = require('./createUser');
const userController = require('./userController')(express);
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const productController = require('./productController')(express);
const ValidateUser = require('./ValidateUser');
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use("/", bodyParser.json());
app.use("/", userController);
app.use("/product",ValidateUser ,productController);

var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})