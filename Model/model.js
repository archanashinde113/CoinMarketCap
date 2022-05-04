const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  data:{
      type:String
  }
   
},
{timestamps:true}
) 

module.exports = mongoose.model('coinmarket', imageSchema)
