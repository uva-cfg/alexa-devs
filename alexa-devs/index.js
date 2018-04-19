// index.js
// Alexa Dev Team Fall 2017
// Code for Good @UVa

'use strict';

// load additional files/modules needed
const traditions = require('./traditions/res.js');
const colloq = require('./colloqIntent/res.js');
const mealExchange = require('./mealExchange/res.js');
const mealHours = require('./mealHours/res.js');
const Alexa = require('alexa-sdk');
const lousListProfessor = require('./louslist_professor/res.js');
const lousListLocation = require('./louslist_location/res.js');

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
    'LousListProfessor': function () {
      var filledSlots = delegateSlotCollection.call(this);
      // grab the slot values
      let department_abbreviation = this.event.request.intent.slots.department_abbreviation.value;
      //let course_num = this.event.request.intent.slots.course_num.value;
      console.log(this.event.request.intent.slots);
      console.log(department_abbreviation);
      //console.log(course_num);
      // make string to print out (testing)
      // let string = department_abbreviation + course_num;
      //let speechOutput = lousListProfessor.sendResponse(department_abbreviation, course_num);
      this.emit(':tell', department_abbreviation);

      // send to res file
      // let speechOutput = lousListProfessor.sendResponse(department_abbreviation)

    },
    'LousListLocationIntent': function () {
      var filledSlots = delegateSlotCollection.call(this);
      // grab the slot values
      let department_abbreviation = this.event.request.intent.slots.department_abbreviation.value;
      let course_number = this.event.request.intent.slots.course_number.value; //Issue with what I should be using for slot.property
      console.log(this.event.request.intent.slots);
      console.log(department_abbreviation);
      // make string to print out (testing)
      // let string = department_abbreviation + course_num;
      let speechOutput = lousListLocation.sendResponse(department_abbreviation, course_number);
      this.emit(':tell', speechOutput);

      // send to res file
      // let speechOutput = lousListProfessor.sendResponse(department_abbreviation)

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
