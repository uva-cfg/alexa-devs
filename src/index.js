// index.js
// Alexa Dev Team Fall 2017
// Code for Good @UVa

let feature1 = require('./feature1/res.js');

const handlers = {
    // LaunchRequest when user says 'Alexa, open Cav Assistant'
    'LaunchRequest': function () {
      this.emit('feature1');
    },
    // Feature1Intent when user says 'Show feature one.'
    'Feature1Intent': function () => {
      feature1.sendResponse();
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
