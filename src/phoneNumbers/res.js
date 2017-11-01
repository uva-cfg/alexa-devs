// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var work = require('work.js');

function sendResponse() {
  console.log(this);
  //TEST: this.emit(':tell', 'Sorry, I don\'t have that functionality yet.');
var result = work.getPhone;
  return (result);
}

module.exports = {
  sendResponse: sendResponse(),
}
