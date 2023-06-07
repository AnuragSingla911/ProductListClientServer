

const { v4 } = require("uuid");
const { findUserInMongo } = require("./mongo/model");
const { users } = require("./server");
var client = require('./redisClient').client;
var insertIntoRedis = require('./redisClient').insertIntoRedis;

module.exports = function(req, res) {
   
    console.log("req body -->",req.body);
    console.log("req session -->", req.body.session);

    if(!req.body.session){
        console.log("session invalid");
        return res.status(403).send({"message":"Session Invalid"});
    }
 
    // var body = JSON.parse(req.body);
    // console.log("req cookie -->", body.set-cookie);

    

    res.status(200).send({});
    
        

}