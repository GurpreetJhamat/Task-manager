const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// console.log(MongoClient);
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect');
    }
    // console.log('Connected Successfully');
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Gurpreet',
    //     age: 20,
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Sukhdeep',
    //         age: 20,
    //     },
    //     {
    //         name: 'Gurprem',
    //         age: 21,
    //     }
    // ], (error, result) =>  {
    //     if(error){
    //         return console.log('Unable to insert documents');
    //     }
    //     console.log(result.ops);
    // });

    db.collection('tasks').insertMany([
        {
            description: 'Buy milk',
            completed: true,
        }, {
            description: 'Learn Nodejs',
            completed: false,
        }, {
            description: 'Cook Food',
            completed: false,
        }
    ], (error, result) => {
        if(error){
            console.log('Unable to insert documents');
        }
        console.log(result.ops);
    })
});