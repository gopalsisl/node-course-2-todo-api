const mongoose=require('mongoose');
const url = 'mongodb://localhost:27017';
mongoose.Promise=global.Promise;

// Database Name
const dbName = 'TodoApp';
mongoose.connect(url+'/'+dbName);
var Todo=mongoose.model('ToDo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type: Number
    }
})
var newTodo = new Todo({
    text:'Cook dinner eergtret'
});
newTodo.save().then((doc)=>{
console.log('saves todo:',doc);
},(err)=>{
    console.log(err);
})
var othertodo = new Todo({
    text:'gopal kumar',
    completed:1,
    completedAt:123
})
othertodo.save().then((doc)=>{
    console.log('saves todo:',doc);
},(err)=>{
    console.log(err);
})