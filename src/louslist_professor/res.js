//res.js
//handles user input and response

var Alexa = require('alexa-sdk');
var classes = require('./fake.json');

module.exports = {
  sendResponse: function sendResponse(department_abbreviation, course_num) {
    var res = "The department is " + department_abbreviation + " and the course is " + course_num;
    console.log("The department_abbreviation is: " + department_abbreviation);
    console.log("The course_num is: " + course_num);
    return res;
    //console.log("The slot value is: " + slotVal);

  //   var res = "Sorry, I couldn't find meal exchange options for that location.";
  //   for(var key in mealExchange ) {
  //       //console.log("Key is: "+key);
  //       if (key == slotVal) {
  //         //console.log("MATCHED KEY is: "+key);
  //         res = mealExchange[key];  //check later to make sure that the intent that we are getting lines up with the keys
  //       }
  //   }
  //   //console.log("Result is: " + res);
  //   return (res);
  //
  // }
}
