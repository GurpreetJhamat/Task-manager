const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID;

const { MongoClient, ObjectID } = mongodb;
// console.log(MongoClient);
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

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

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Buy milk',
    //         completed: true,
    //     }, {
    //         description: 'Learn Nodejs',
    //         completed: false,
    //     }, {
    //         description: 'Cook Food',
    //         completed: false,
    //     }
    // ], (error, result) => {
    //     if(error){
    //         console.log('Unable to insert documents');
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('users').findOne({ _id: new ObjectID("5ed9620779743802a485e1c1") }, (error, user) => {
    //     if(error){
    //         console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     console.log(users);
    // })
    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5ed9634c2beeae4a609a0ad9") }, (error, task) => {
    //     if(error){
    //         console.log('Unable to fetch task');
    //     }
    //     console.log(task);
    // });

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if(error){
    //         console.log('Unable to fetch tasks');
    //     }
    //     console.log(tasks);
    // });

    // db.collection('tasks').updateMany(
    //     { 
    //         completed: false 
    //     },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error);
    //     });

    db.collection('tasks').deleteOne({
        description: 'Cook Food'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log('Unable to delete');
    })
});