const mongoose = require('mongoose');
mongoose.connect('mongodb://120.78.215.237:27017/admin');

let db = {
    "userInfo":{
        username:String,
        password:String
    }
};

for(let key in db){
    mongoose.model(key,mongoose.Schema(db[key]))
}

module.exports={
    'getModel':function(modelName){
        return mongoose.model(modelName)
    }
};