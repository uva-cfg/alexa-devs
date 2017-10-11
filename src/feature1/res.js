// res.js
// handles user input and response

function sendResponse(){
  this.emit(":tell", "Sorry, I don't have that functionality yet.");
}

module.exports = {
  sendResponse: sendResponse
}
