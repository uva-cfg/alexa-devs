// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var colloqs = require('./colloqs.json');

module.exports = {
  sendResponse: function sendResponse(slotValue) {
    var res = "I didn't find anything";
    for (var key in colloqs) {
      if (key == slotValue) {
        res = colloqs[key]; //TO-DO Continue to update the JSON file with better descriptions of the locations,
    return res;             //and make the slots match up better
}
  },
}
