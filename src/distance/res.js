// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
var googleMap = require('google-distance');

//Biking or walking (in various forms)
var modeOfTransport = {
  "bike": "biking",
  "ride my bike": "biking",
  "walk": "walking",
};

module.exports = {
  //This will probably all end up going into the work file because its really messy
  /*
  * Can this take multiple parameters? Because in the future it will need
  * to take both the mode of transport and the destination slot values.
  */
  sendResponse: function sendResponse(modeOfTransportVal) {
    var res = "Sorry, I can't help you";
    //This for loop structure is borrowed from mealExchange intent
    //defaults the mode of transport to walking
    var modeToUse = "walking";
    for(var key in modeOfTransport) {
      if(key == modeOfTransportVal) {
        modeToUse = modeOfTransport[key];
      }
    }


    return modeToUse;

  }
};
