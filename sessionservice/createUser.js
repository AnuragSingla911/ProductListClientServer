const { saveUserInMongo, findUserInMongo } = require("./mongo/model");
const { users } = require("./server");

module.exports = function(req, res) {
    console.log(req.body);
   
    findUserInMongo(req.body.username).then((users)=>{
       
        var userFound = false;
        
            for(user of users) {
               
                if(user && user.username && user.username === req.body.username){
                    console.log("user found !!");
                    userFound = true;
                   break;
                }
            }
        
        if(userFound == true){
            return res.status(400).send({
                            message: 'Username already exist',
                            success : false
                         });
        }

        saveUserInMongo(req.body.username, req.body.password).then(()=>{
            res.status(200).send({
                message: 'User Created Successfully',
                success : true
        
            });
        })


    })
   
   
    
}