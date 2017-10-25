// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var res = "";

function sendResponse() {
  const colloqs = require('colloqs.json');
  for( var key in colloqs ) {
      if( key == intent ) res = colloqs[key];
  }
  return (res);
}

module.exports = {
  sendResponse: sendResponse(),
}
