const express = require('express')
const dotenv = require('dotenv')
 dotenv.config();
 const mongoose = require('mongoose')

const app = express();


const coinmarket = require('./Router/routes')
app.use('/coinmarket',coinmarket);


   mongoose.connect(process.env.mongoURI,()=> {
       console.log('mongoose connected')
   })
 
 
app.listen(2900,( ) => {
    console.log('server running at port 5000')
});
