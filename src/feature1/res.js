// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
const colloqs = require('colloqs.json');

function sendResponse( intentValue) {
  for( var key in colloqs ) {
      if( key == intentValue ) var res = colloqs[key];  //check later to make sure that the intent that we are getting lines up with the keys
  }
  return (res);
}

module.exports = {
  sendResponse: sendResponse()
}
