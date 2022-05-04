const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
   name:{
       type:String
   },

    amount:{
        type: Number
    },
    price:{
        type:Number
    },
    USD:{
        type:Number
    }
   
},
{timestamps:true}
) 

module.exports = mongoose.model('coinmarket', imageSchema)
