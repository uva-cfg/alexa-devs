// res.js
// handles user input and response

//All required variables
var Alexa = require('alexa-sdk');
var googleMap = require('google-distance');
var destinations = require('./destinations.json');
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
  sendResponse: function sendResponse(modeOfTransportVal, destinationVal) {
    console.log("modeOfTransportVal is " + modeOfTransportVal + " and destinationVal is " + destinationVal);

    //TODO: Add a check to see if modeOfTransportVal and destinationVal are undefined

    //Initializes response array
    var res = [];

    //Finds the way of representing the mode of transport that will be recognized by google
    //(default is walking)
    var modeToUse = "walking";
    for(var key in modeOfTransport) {
      if(key == modeOfTransportVal.toLowerCase()) {
        modeToUse = modeOfTransport[key];
      }
    }

    //Adds mode of transportation to result array
    res.push(modeToUse);


    //Finds the address in destinations.json of the slot value given (defaults to the rotunda)
    var destinationToUse = "The Rotunda, 1826 University Ave, Charlottesville, VA 22904";
    for(var key2 in destinations) {
      if(key2 == destinationVal.toLowerCase()) {
        destinationToUse = destinations[key2];
      }
    }
    console.log("Destination to Use is " + destinationToUse);

    //Adds destination to be used to result array
    res.push(destinationToUse);

    return res;
  }
};
