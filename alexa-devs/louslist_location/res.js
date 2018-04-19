// res.js
// handles user input and response

// owen wilson was here
var Alexa = require('alexa-sdk');
var data = require('./fake.json');

var key = "location"; //What is stored from classes (declared here for easy change)

module.exports = {
  sendResponse: function sendResponse(abbreviation, number) {
    var res = abbreviation+" "+number;

    var allClasses = data;
    var validClasses=[];
    var l = allClasses.length;
    for(var i = 0; i < l; ++i) {
        if(allClasses[i]["deptID"]==abbreviation && allClasses[i]["courseNum"]==number)
          validClasses.append(allClasses[i]);
    }

    var numOfClasses = validClasses.length;
    if(numOfClasses==0) {
      res+=" is not being offered";
    }
    else if(numOfClasses==1) {
      res+=" is being taught at "+validClasses[0][key];
    }
    else {
      res+=" is being taught at ";
      var locationsList = [];
      for(var i = 0; i< numOfClasses; ++i) {
        locationsList.append(validClasses[i][key]);
      }
      var locationsSet = new Set(locationsList);
      var iter = locationsSet.values();
      for(var i = 0; i<locationsSet.size-1; ++i) {
        res+=" is being taught at "+iter.next().value()+", ";
      }
      res+=" and "+iter.next().value();
    }
    //console.log("Result is: " + res);
    console.log(res);
    return (res);

  }
}
