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
  }
}
