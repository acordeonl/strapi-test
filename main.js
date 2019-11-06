var mongo = require('mongodb');
var mongo_db ; 

// test change  4s5fdsafas fdafsfddfsfdsafdsafsdafafdafsd
var sleep = n => new Promise(resolve => setTimeout(resolve, n))
mongo.MongoClient.connect('mongodb://localhost:27017').then( async client => {
  mongo_db = client.db('cms-app') ; 
  console.log('connected to db');

  while(true){
    await sleep(1)
    mongo_db.collection('test').insertOne({
      firstName:'luis', 
      lastName:'nazario',
      __v:'0'
    })
  }
  console.log(res)
} , function (err) {
    console.log(err);
    process.exit(-1);
});
