// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var classes = require('./fake.json');

module.exports = {
  sendResponse: function sendResponse(slotVal) {
    console.log(this);
    var res = "I didn't find anything";
    console.log("The slot value is: " + slotVal);
    return res;
    //console.log("The slot value is: " + slotVal);

  //   var res = "Sorry, I couldn't find meal exchange options for that location.";
  //   for(var key in mealExchange ) {
  //       //console.log("Key is: "+key);
  //       if (key == slotVal) {
  //         //console.log("MATCHED KEY is: "+key);
  //         res = mealExchange[key];  //check later to make sure that the intent that we are getting lines up with the keys
  //       }
  //   }
  //   //console.log("Result is: " + res);
  //   return (res);
  //
  // }
}
