// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var colloqs = require('./colloqs.json');

module.exports = {
  sendResponse: function sendResponse(slotValue) {
    var res = "I didn't find anything";
    for (var key in colloqs) {
      if (key == slotValue) {
        res = colloqs[key]; //check later to make sure that the intent that we are getting lines up with the keys
      }
    }
    return res;
  },
}
