const {MongoClient,ObjectID}=require('mongodb');

// Database Name
const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';


// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if (err) {
        return console.log('unable to connect to  mongo serever');
    }
    else {
        console.log("Connected successfully to server");
    }
    const db = client.db(dbName);
    db.collection('Todos').find({completed:false}).toArray().then((doc)=>{
        console.log('Todos');
        console.log(JSON.stringify(doc,undefined,2));

    },(err)=>{
        console.log('unable to fetch detail',err);
    })

    db.collection('Todos').find({
        _id:new ObjectID('5af55bec47b6b61ce87391e0')
    }).toArray().then((doc)=>{
        console.log('Todos');
        console.log(JSON.stringify(doc,undefined,2));

    },(err)=>{
        console.log('unable to fetch detail',err);
    })

    //count function

    db.collection('Todos').find().count().then((doc)=>{
        console.log(`Todos:${doc}`);

    },(err)=>{
        console.log('unable to fetch detail',err);
    })

    // find user whose name is  gopal

    db.collection('Users').find({
        name:'gopal kumar'
    }).toArray().then((doc)=>{
        console.log(`Users`);
        console.log(JSON.stringify(doc,undefined,2))

    },(err)=>{
        console.log('unable to fetch detail',err);
    })
})