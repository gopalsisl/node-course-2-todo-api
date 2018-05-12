const mongoose=require('mongoose');
const url = 'mongodb://localhost:27017';
mongoose.Promise=global.Promise;

// Database Name
const dbName = 'TodoApp';
mongoose.connect(url+'/'+dbName);
var Todo=mongoose.model('ToDo',{
    text:{
        type:String,
        required:[true,'text is requird'],
        trim:true,
        minlength:1
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type: Number,
        default:null
    }
})

/*creating user model*/
var User=mongoose.model('users',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

/*
creating user object
*/

var user= new User({
    email:'kumar.gopal.308@gmail.com       '
})
user.save().then((doc)=>{
    console.log('save user',doc);
},(err)=>{
    console.log(err);
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