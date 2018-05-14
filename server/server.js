const express=require('express');
const bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {user}=require('./model/User');
var {Todo} = require('./model/Todo');

var app= express();
// mio convert json to objectddleware t
app.use(bodyParser.json())
app.post('/todos',(req,res)=>{
    var todo =new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
     res.send(doc);
    },(err)=>{
      res.status(400).send(err);
    })

})
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.status(200).send({todos});
    },(err)=>{
        res.status(400).send(err); 
    })
})


app.listen('3000',()=>{
    console.log('App started at port 3000');
})

module.exports={app}