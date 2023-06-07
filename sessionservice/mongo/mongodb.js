var db = {};
var mongoose = require('mongoose');
var isConnectedBefore = false;

db.getMongooseObject = function ()
{
  if (db.dbObject) return db.dbObject;
  else
  {
    db.init(function ()
    {
      if (db.dbObject) return db.dbObject;
      else
      {
        console.log("Couldn't connect to the DB.")
      }
    })
  }
};
db.init = function (callback)
{
  // Create the database connection 
  mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
}
 
//   mongoose.connect("mongodb://localhost:27017",{
//     "poolSize": 10,
//     "reconnectInterval": 2000
//   }, function (err)
//   {
//     if (err)
//     {
//       console.log("error in connection to mongodb");
//       if (callback)
//       {
//         callback(err);
//       }
//       return;
//     }
//     var Schema = mongoose.Schema;
//     db.dbObject = mongoose;
//     if (callback)
//     {
//       callback();
//     }
//   });
// };
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function (e)
{
  console.log('Mongoose default connection open to'+e);
  isConnectedBefore = true;
});
// If the connection throws an error
mongoose.connection.on('error', function (err)
{
 
  console.log('Mongoose default connection error: ' + err);
  mongoose.disconnect();
});


module.exports = db;
