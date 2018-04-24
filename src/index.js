// index.js
// Alexa Dev Team Fall 2017
// Code for Good @UVa

'use strict';

// load additional files/modules needed
const distance = require('./distance/res.js')
//const traditions = require('./traditions/res.js');
//const colloq = require('./colloqIntent/res.js');
//const mealExchange = require('./mealExchange/res.js');
//const mealHours = require('./mealHours/res.js');
//const phoneNumbers = require('./phoneNumbers/res.js');
const Alexa = require('alexa-sdk');
const googleMap = require('google-distance');
const request = require('request');

//make a slot for colloqialism on the skills builder for this to access
// define constants
const HELP_MESSAGE = "Welcome to Cav Assistant. For information on my capabilities, ask me to tell you what I can do.";
const HELP_REPROMPT = "Hi there. Ask me to tell you a U.V.A. tradition or for the phone number of a place nearby.";
const STOP_MESSAGE = "Thanks for talking. Wah who wah.";
const APP_ID = 'amzn1.ask.skill.e7b4f881-c503-4c43-bc24-29c242ed0890';

// set up handler to direct intent to proper content
const handlers = {
    // LaunchRequest when user says 'Alexa, open Cav Assistant'
    'LaunchRequest': function () {
      this.emit(':ask', "Welcome to Cav Assistant. What can I do for you?");
    },
    // this is where the user will ask alexa, what is "example of colloqialism here"?
    'ColloqIntent': function () {
      var filledSlots = delegateSlotCollection.call(this);
      var slotValue = this.event.request.intent.slots.slang.value;
      console.log(slotValue);
      let speechOutput = colloq.sendResponse( slotValue );
      this.emit(':tell', speechOutput);
    },
    // PhoneNumberIntent
    'PhoneNumberIntent': function () {
      var filledSlots = delegateSlotCollection.call(this);
      var slotValue = this.event.request.intent.slots.place.value;
      console.log(slotValue);
      let speechOutput = phoneNumbers.sendResponse( slotValue );
      this.emit(':tell', speechOutput);
    },
    // Dummy sample intent
    'FeatureOneIntent': function () {
     let speechOutput = feature1.sendResponse;
     this.emit(':tell', speechOutput);
    },
    'TheyNeedToEatIntent': function () {
      // delegate slot collection to Alexa
      var filledSlots = delegateSlotCollection.call(this);

      // access collected slot
      let slotVal = this.event.request.intent.slots.diningHall.value;
      console.log(slotVal);

      // construct response
      let speechOutput = mealExchange.sendResponse(slotVal);
      this.emit(':tell', speechOutput);
    },
    'HappyFoodTimesIntent': function () {
      // delegate slot collection to Alexa
      var filledSlots = delegateSlotCollection.call(this);

      // access collected slot
      let slotVal = this.event.request.intent.slots.diningHall.value;
      console.log(slotVal);

      // construct response
      let speechOutput = mealHours.sendResponse(slotVal);
      this.emit(':tell', speechOutput);
    },
    'TraditionsBeSwagginIntent': function () {
      //TO-DO: figure out a way to get this to work in res instead
      var randomIndex = Math.floor(Math.random() * 22);
      let speechOutput = traditions.sendResponse(randomIndex);
      this.emit(':tell', speechOutput);
    },
    'DistanceIntent': function () {
      // delegate slot collection to Alexa
      var filledSlots = delegateSlotCollection.call(this);

      // access collected slots
      let destinationSlotVal = this.event.request.intent.slots.destinations.value;
      //console.log(destinationSlotVal);
      let modeSlotVal = this.event.request.intent.slots.travelType.value;
      //console.log(modeSlotVal);

      // access user address
      let deviceID = this.event.context.System.device.deviceId;
      let apiAccessToken = this.event.context.System.apiAccessToken;
      console.log("The deviceId is " + deviceId + " and the apiAccessToken is " + apiAccessToken);
      let apiEndpoint = this.event.context.System.apiEndpoint;

      //Returns method of travel and destination in an array
      let valuesToUse = distance.sendResponse(modeSlotVal, destinationSlotVal);

      //Determines if Alexa should say walk or bike in the response (will default to walk if theres an error)
      var walkOrBike;
      if(valuesToUse[0].equals("biking")) {
        walkOrBike = "bike";
      }
      else {
        walkOrBike = "walk";
      }

      //DistanceMatrix communication
      var that = this;
      var speechOutput = "Couldn't find your destination"
      googleMap.get(
        {
          origin: 'Courtenay House, Charlottesville, VA',
          destination: valuesToUse[1],
          mode: valuesToUse[0],
          units: 'imperial'
        }, function(err, dat) {
              //console.log(dat);
              //console.log(err);
              console.log("The duration is " + dat.duration);
              speechOutput = "It will take " + dat.duration + " to " + walkOrBike + " to " + destinationSlotVal;
              that.emit(':tell', speechOutput);
              return;
            }
      );
    },
    // HelpIntent when user says 'Help'
    'AMAZON.HelpIntent': function () {
      const speechOutput = HELP_MESSAGE;
      const reprompt = HELP_REPROMPT;
      this.emit(':ask', speechOutput, reprompt);
    },
    // CancelIntent when the user says 'cancel'
    'AMAZON.CancelIntent': function () {
      this.emit(':tell', STOP_MESSAGE);
    },
    // StopIntent when the user says 'no' or 'stop'
    'AMAZON.StopIntent': function () {
      this.emit(':tell', STOP_MESSAGE);
    }
};

// function to delegate slot collection to Alexa
function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: " + this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
      var updatedIntent=this.event.request.intent;
      this.emit(":delegate", updatedIntent);
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      this.emit(":delegate");
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}

// Give the handler object and it's functions to the lambda for
// execution
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context); // create alexa obj
    alexa.appId = APP_ID; // register app id
    alexa.registerHandlers(handlers); // register handlers
    alexa.execute(); // begin
};
