// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var googleMap = require('google-distance')

module.exports = {
  //Add slot val argument to send response when we begin taking in slot vals
  sendResponse: function sendResponse() {
    googleMap.get(
      {
        origin: 'Courtenay House, Charlottesville, VA',
        destination: 'Rice Hall Information Technology Engineering Building, Charlottesville, VA',
        mode: 'biking',
        units: 'imperial'
      },
      function(err, dat) {
        if(err) return console.log(err);
        console.log(dat)
      }
    )
  }
}
