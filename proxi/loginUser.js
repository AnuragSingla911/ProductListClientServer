const fetch = require("node-fetch");

module.exports = function(req, res) {
   
 
fetch('http://localhost:8081/user/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(req.body)
  }).then(response => {
    var cookie = response.headers.get('set-cookie');
    response.json().then(response => {
      console.log(response);
      return res.status(200).cookie('session', cookie).send(response);
    })
    
  }).catch(err => {console.log(err); res.status(500).send(err);
  });
}