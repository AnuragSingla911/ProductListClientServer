const redis = require('redis');
const client = redis.createClient();
client.on('error', err => console.log('Redis Server Error', err));
client.on('connect', function() {
   console.log('Connected!');


 });
 client.connect();

module.exports.client = client;


module.exports.insertIntoRedis = async function insertIntoRedis(redisClient, key, value) {
    try {
      await redisClient.set(key, value);

    //   await redisClient.get(key).then((value)=> {
    //     console.log(value); 
    //   })
    
      
    } catch (e) {
      console.error(e);
    }
  }

//  module.exports.fetchFromRedis = async function fetchFromRedis(redisClient, key) {
//     try {
//      // await redisClient.set(key, value);

//        await redisClient.get(key).then((value)=> {
//        return value;
//       })
    
      
//     } catch (e) {
//       console.error(e);
//     }
//   }

  