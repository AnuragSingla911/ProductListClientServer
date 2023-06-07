const fetchAllProduct = require("./fetchAllProduct");

module.exports = function(express){
    var router = express.Router();
     
    router.post('/all', fetchAllProduct);

    return router;
  }


