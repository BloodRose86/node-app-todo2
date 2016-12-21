// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('Unable to connect to the server');
    }

    console.log('Connected to the mongodb server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('585a95633fac21496f775316')
    }, {
        $set: {
            name: 'AJ'

        },
        $inc:{
            age: 1
        }
    },  {
            returnOriginal: false
    }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
});