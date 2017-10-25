// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var colloqs = require('colloqs.json');
var index = require('index.js');

function sendResponse() {
  for( var key in colloqs ) {
      if( key == index.slotValue ) var res = colloqs[key];  //check later to make sure that the intent that we are getting lines up with the keys
  }
  return (res);
}

module.exports = {
    sendResponse : sendResponse()
}
