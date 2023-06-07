const fetch = require("node-fetch");

module.exports = function(req, res) {
    console.log(req.body);

fetch('http://localhost:8081/user/create', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(req.body)
}).then(response => {
  response.json().then(response => {
    return res.status(200).send(response);
  })
  
}).catch(err => {console.log(err); res.status(500).send(err);
});
    
}