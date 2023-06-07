const createUser = require("./createUser");
const loginUser = require("./loginUser");
const validateUser = require("./validateUser");

module.exports = function(express){
    var router = express.Router();
     
    router.post('/user/create', createUser);
    router.post('/user/login', loginUser);
    router.post('/user/validate', validateUser);

    return router;
  }