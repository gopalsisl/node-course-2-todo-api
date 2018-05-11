const {MongoClient,ObjectId}=require('mongodb');
const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,(err,client)=>{
    if (err) {
        return console.log('unable to connect to  mongo serever');
    }
    else {
        console.log("Connected successfully to server");
    }
    const db = client.db(dbName);

    /*three methods for deletion*/
    /*db.deleteMany();
    db.deleteOne();
    db.findOneAndDelete(); */

    /*
    db.deleteMany()
     */
    db.collection('Todos').deleteMany({
        text:'aviranjan kumar'
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log('unable to delete');
    })

    /*
    db.deleteOne();
     */
    db.collection('Todos').deleteOne({
        text:'gopal kumar'
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log('unable to delete');
    })

    /*
    db.findOneAndDelete();
     */
    db.collection('Todos').findOneAndDelete({
        completed:false
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log('unable to delete');
    })
})