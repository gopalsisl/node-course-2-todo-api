const {MongoClient,ObjectId}=require('mongodb');
const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,(err,client)=> {
    if (err) {
        return console.log('unable to connect to  mongo serever');
    }
    else {
        console.log("Connected successfully to server");
    }
    const db = client.db(dbName);

    /*update method in mongo*/
    /*db.collection().findOneAndUpdate(filter,update,option.callback);*/
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5af55bec47b6b61ce87391e0')
    }, {
        $set: {
            text:'gopal kumar singh'
        }
    }, {
        returnOriginal: false


    }).then((result) => {
        console.log(result);
    });


    db.collection('Users').updateMany({
            name:'gopal kumar'
        },
        {$set:{
            name:'pakistan'
        },$inc:{
            age:1,
            ag:1
        }},{
            returnOriginal:false
        }).then((result)=>{
        console.log(result)
    })
});

