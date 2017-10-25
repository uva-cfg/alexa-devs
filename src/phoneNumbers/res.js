// res.js
// handles user input and response

var Alexa = require('alexa-sdk');

function sendResponse() {
  console.log(this);
  //TEST: this.emit(':tell', 'Sorry, I don\'t have that functionality yet.');
  return (phoneNumber.getPhone());
}

module.exports = {
  sendResponse: sendResponse(),
}
