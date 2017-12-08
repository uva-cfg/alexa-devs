// res.js
// handles user input and response

// owen wilson was here
var Alexa = require('alexa-sdk');

var diningHours = {
  "o hill":["O'Hill is open Mon-Fri from 7AM - 9PM", "Sat-Sun from 8AM - 9PM"],
  "newcomb":["Newcomb is open Mon-Thu	from 7AM - 8PM", "Fri from 7AM - 2:15PM", "Saturday from 10AM - 2PM", "Sunday from 10AM - 8PM"],
  "runk":["Runk is open Mon-Fri from 7AM - 8PM", "Sat-Sun from 10AM - 8PM"],
  "1819 at mcleod":["1819 at McLeod is open Mon-Fri from 7:30AM - 1:30PM"],
  "1819 at newcomb":["1819 at Newcomb is open Mon-Fri from 8AM - 11PM", "Saturday from 10AM - 4PM", "Sunday	from 3PM - 11PM"],
  "1819 at runk":["1819 at Runk is open Mon-Fri from 7AM - 12AM", "Sat-Sun from 10AM - 12AM"],
  "einsteins": ["Einsteins at the bookstore is open Mon-Thu from 8:30AM - 3PM", "Friday from 8:30AM - 2PM", "and einsteins at rice hall is open Mon-Thu from 8AM - 4PM", "Friday from 8AM - 3PM"],
  "fine arts cafe":["Fine arts cafe is open Mon-Thu from 9AM - 6:30PM", "Friday from 9AM - 3PM"],
  "garden room":["Garden room is open Mon-Fri from 11:30AM - 2PM"],
  "in the nood":["In the nood is open Mon-Thu from 11AM - 11PM", "Friday from 11AM - 3PM"],
  "n 2 go":["N 2 Go is open Mon-Thu from 11AM - 10PM", "Friday from 11AM - 8PM", "Sat from 2PM - 8PM"],
  "alderman cafe":["Alderman cafe is open Mon-Thu from 8AM - 11:30PM", "Friday from 8AM - 5PM", "Saturday from 12PM - 6PM", "Sunday from 1PM - 11:30PM"],
  "argo cafe":["Argo Tea is open Mon-Thu from 8AM - 5PM", "Friday from 8AM - 3PM"],
  "c3":["C3 is open Mon-Fri from 5PM - 12AM", "Sat-Sun from 12PM - 12AM"],
  "cafe mcleod":["Cafe McLeod is open Mon-Fri from 8AM - 2PM"],
  "clark cafe":["Clark Cafe is open Mon-Thu from 8AM - 10PM", "Friday from 8AM - 5PM", "Saturday from 1PM - 6PM", "Sunday from 1PM - 9PM"],
  "crossroads":["all dining options at crossroads are open Mon-Wed from 8AM - 1AM", "Thu-Fri from 8AM - 2AM", "Sat-Sun from 11AM - 2AM"],
  "crumbs":["Crumbs is open Mon-Sun from 4PM - 12AM"],
  "poolside cafe at the AFC":["Poolside cafe at the AFC is open Mon-Fri from 9AM - 9PM"],
  "rising roll":["Rising Roll is open Mon-Thu from 8AM - 5PM", "Friday from 8AM - 3PM"],
  "sidely austin":["The cafe is open Mon-Fri from 8AM - 2PM", "Greenberry's is open Mon-Fri from 8AM - 2:30PM"],
  "starbucks":["Starbucks is open Mon-Thu from 7:30AM - 7PM", "Friday from 7:30AM - 5PM"],
  "street eats foodtruck":["The foodtrucks are open Mon-Fri from 11AM - 3PM"],
  "west range":["West range is open Mon-Thu from 9AM - 8PM", "Friday from 9AM - 3PM"],
  "the pav":["chick fil a and subway are open Mon-Fri from 10:30AM - 8PM", "five guys is open Mon-Fri from 11AM - 9PM"]
};

module.exports = {
  sendResponse: function sendResponse(slotVal) {
    console.log(this);
    //console.log("The slot value is: " + slotVal);

    var res = "Sorry, I couldn't find hours for that location.";
    for(var key in diningHours ) {
        //console.log("Key is: "+key);
        if (key == slotVal) {
          //console.log("MATCHED KEY is: "+key);
          res = diningHours[key];  //check later to make sure that the intent that we are getting lines up with the keys
        }
    }
    //console.log("Result is: " + res);
    return (res);

  }
}
