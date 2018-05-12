const mongoose=require('mongoose');
const url = 'mongodb://localhost:27017';
mongoose.Promise=global.Promise;

// Database Name
const dbName = 'TodoApp';
mongoose.connect(url+'/'+dbName);


module.exports={mongoose}