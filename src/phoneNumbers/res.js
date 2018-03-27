// res.js
// handles user input and response
var Alexa = require('alexa-sdk');
var phone = require('./phone.json');
module.exports = {
  sendResponse: function sendResponse(slotValue) {
    var res = "I didn't find anything";
    for (var key in phone){
      if(key.toLowerCase()==slotValue.toLowerCase()){
        res = phone[key.toLowerCase()];
      }
    }
    console.log(res);
    return res;
  },
}
