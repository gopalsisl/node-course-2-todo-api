var mongoose=require('mongoose');
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


module.exports={Todo}
