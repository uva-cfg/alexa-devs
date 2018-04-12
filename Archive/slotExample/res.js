// res.js
// handles user input and response

module.exports = {
  sendResponse: function sendResponse(slotVal) {
    console.log(this);
    //TEST: this.emit(':tell', 'Sorry, I don\'t have that functionality yet.');
    var theSlotValue = slotVal;
    return (theSlotValue);
  }
}
