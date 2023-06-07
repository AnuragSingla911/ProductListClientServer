

const { v4 } = require("uuid");
const { findUserInMongo } = require("./mongo/model");
const { users } = require("./server");
var client = require('./redisClient').client;
var insertIntoRedis = require('./redisClient').insertIntoRedis;

module.exports = function(req, res) {
   
    console.log(req.body);

    findUserInMongo(req.body.username).then((users)=>{
       
        var userFound = false;
        
            for(user of users) {
               
                if(user && user.username && user.username === req.body.username 
                    && user.password === req.body.password){
                    console.log("user found !!");
                    userFound = true;
                   break;
                }
            }
        
        if(userFound == false){
            return res.status(400).send({
                            message: 'Username does not exist',
                            success : false
                         });
        }

        const expiry = new Date() + (60*60*24*1000);
        var ssid = "SS" + v4();
        const sessionInfo = {
            "username": req.body.username,
            "password": req.body.password,
            "loggedInTime": new Date().toLocaleString(),
            "sessionid": ssid,
            "expiry": expiry.toLocaleString()
    
        }
        
        insertIntoRedis(client, req.body.username, JSON.stringify(sessionInfo));
        res.cookie('session',ssid);
        res.status(200).send({
            message: 'Login Successfully',
            success : true,
            sessionInfo : {sessionInfo}
    
        });
    });
        

}