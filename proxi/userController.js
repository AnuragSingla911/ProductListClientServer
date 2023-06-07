const createUser = require("./createUser");
const loginUser = require("./loginUser");

module.exports = function(express){
    var router = express.Router();
     
    router.post('/user/create', createUser);
    router.post('/user/login', loginUser);

    return router;
  }