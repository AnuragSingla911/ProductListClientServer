const fetch = require("node-fetch");
module.exports = (req, res, next) => {
  console.log("validate user called with cookie" , req.cookies);
    fetch('http://localhost:8081/user/validate', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    
    body: JSON.stringify({"session": req.cookies.session})
  }).then(response => {
    console.log(response);
    if(!response || response.status === 403){
      return res.status(403).send({"success": false, "message":"session invalid"});
    }
    next();
  }).catch(err => {console.log(err); res.status(403).send(err);
  });


    
}