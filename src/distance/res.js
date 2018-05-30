// res.js
// handles user input and response

//All required variables
var Alexa = require('alexa-sdk');
var googleMap = require('google-distance');
var destinations = require('./destinations.json');
var modeOfTransport = {
  "bike": "biking",
  "biking": "biking",
  "ride my bike": "biking",
  "riding my bike": "biking",
  "bike ride": "biking",
  "if i take my bike": "biking",
  "walk": "walking",
  "walking": "walking"
};


module.exports = {
  //This will probably all end up going into the work file because its really messy
  /*
  * Can this take multiple parameters? Because in the future it will need
  * to take both the mode of transport and the destination slot values.
  */
  sendResponse: function sendResponse(originVal, modeOfTransportVal, destinationVal) {
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


    //Finds the address in destinations.json of the slot value given for the destination (defaults to the rotunda)
    var destinationToUse = "The Rotunda, 1826 University Ave, Charlottesville, VA 22904";
    for(var key2 in destinations) {
      if(key2 == destinationVal.toLowerCase()) {
        destinationToUse = destinations[key2];
      }
    }
    console.log("Destination to Use is " + destinationToUse);
    //Adds destination to be used to result array
    res.push(destinationToUse);

    //Finds the address in destinations.json of the slot value given for the origin (also defaults to the rotunda)
    var originToUse = "The Rotunda, 1826 University Ave, Charlottesville, VA 22904";
    for(var key3 in destinations) {
      if(key3 == originVal.toLowerCase()) {
        originToUse = destinations[key3];
      }
    }
    console.log("Origin to Use is " + originToUse);
    //Adds origin to be used to result array
    res.push(originToUse);

    return res;
  }
};
