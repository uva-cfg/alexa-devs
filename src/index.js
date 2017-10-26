// index.js
// Alexa Dev Team Fall 2017
// Code for Good @UVa

'use strict';

// load additional files/modules needed
const feature1 = require('./feature1/res.js');
const Alexa = require('alexa-sdk');
var mySlot = this.event.request.intent.slots.SlotName.value;
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
    // Feature1Intent when user says 'Show feature one.'
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

module.exports = {
    slotValue : mySlot
}

// Give the handler object and it's functions to the lambda for
// execution
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context); // create alexa obj
    alexa.appId = APP_ID; // register app id
    alexa.registerHandlers(handlers); // register handlers
    alexa.execute(); // begin
};
