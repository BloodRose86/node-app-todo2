// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('Unable to connect to the server')
    } else {
        console.log('Connected to the mongodb server')
    }
    
    db.collection('Users').insertOne({
        name: 'Andre', 
        age: 29,
        location: 'Strand'
    }, (err, result) => {

        if(err) {
          return console.log('Unable to insert user', err);
        } else  {
            console.log(JSON.stringify(result.ops, undefined, 2));
        };
    });

    db.close();
});