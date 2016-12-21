// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the mongodb server');

    // db.collection('Users').deleteMany({name: 'Andre'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('585a7f963fac21496f77530f')
        }).then((result) => {
        console.log(result);
    });

    // db.close();
});