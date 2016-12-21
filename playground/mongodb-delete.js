// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the mongodb server');

    db.collection('Todos').deleteMany({text: 'Eat flameros'}).then((result) => {
        console.log(result);
    });

    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });

    db.collection('Todos').findOneAndDelete({completed: true}).then((result)=> {
        console.log(result);
    });

    // db.close();
});