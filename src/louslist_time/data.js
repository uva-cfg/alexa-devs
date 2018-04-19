//res.js
//handles user input and response

var Alexa = require('alexa-sdk');
var classes = require('./fake.json');

module.exports = {
  sendResponse: function sendResponse(department_abbreviation, course_num) {
    var classes = data;
    var length = classes.legnth;
    var validClasses = [];
    var res = department_abbreviation + " " + course_num;

    for(var i = 0; i < length; i++){
      if(classes[i]['deptID'] == department_abbreviation && classes[i]['courseNum'] == course_num){
        validClasses.append(classes[i]);
      }
    }

    if(validClasses.length == 0){
      res += " is not offered this semester"
    }
    else{
      res += " is being offered at"
      for(int i = 0; i < validClasses.length; i++){
        res += classes[i][meetingTime] + " ";
        if(i != validClasses.length - 1){
          res += "and ";
        }
      }
    }
    return res;
  }
}
