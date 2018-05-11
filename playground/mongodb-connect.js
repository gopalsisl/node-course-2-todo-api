//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} =require('mongodb');  //destructing mongodb object to variable
//Example
// var user={name:'gopal kumar',age:28};
// var {name}=user;
// console.log(name);
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(err)
    {
        return console.log('unable to connect to  mongo serever');
    }
    else{
        console.log("Connected successfully to server");
    }
    const db = client.db(dbName);
    //     db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    //
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.lg('unable to insert data',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.collection('Users').insertOne({
        name:'gopal kumar',
        ag:27,
        location:'Noida'
    },(err,result)=>{
        if(err)
        {
            console.log('unable ti insert datat');
        }
        else{
            console.log(JSON.stringify(result.ops,undefined,2))
        }

    })

    client.close();
});