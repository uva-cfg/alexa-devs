// index.js
// Alexa Dev Team Fall 2017
// yay
// Code for Good @UVa

'use strict';

// load additional files/modules needed
const feature1 = require('./feature1/res.js');
const slotExample = require('./slotExample/res.js');
const Alexa = require('alexa-sdk');

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
      //TEST: this.emit('FeatureOneIntent');
    },
    // Slot Example Intent to show slot passing
    'SlotExampleIntent': function () {

      // delegate slot collection to Alexa
      var filledSlots = delegateSlotCollection.call(this);

      // access collected slot
      let slotVal = this.event.request.intent.slots.animal.value;
      console.log(slotVal);

      // construct response
      let speechOutput = slotExample.sendResponse(slotVal);
      this.emit(':tell', speechOutput);
    },
    'FeatureOneIntent': function () {
     let speechOutput = feature1.sendResponse;
     this.emit(':tell', speechOutput);
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
  console.log("current dialogState: "+this.event.request.dialogState);
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
