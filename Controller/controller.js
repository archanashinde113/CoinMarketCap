//const express = require('express')
const coinmarketcapapi = require('../Model/model')
const axios = require('axios');
module.exports = {
    data : function (req, res) {

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=50&symbol=BNB&convert=USD', {
      headers: {
        'X-CMC_PRO_API_KEY': 'API_KEY',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
  

    const data= req.body;
   
  
    const json = response.data;
    console.log(json);
    resolve(json);
    res.send(json.data.quote.USD);
    
    coinapi = new coinmarketcapapi({
     
      data
   });
   coinapi.save();
     
           
  }
});
    }
}