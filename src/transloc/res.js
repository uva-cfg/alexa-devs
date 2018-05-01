// res.js
// handles user input and response

// owen wilson was here
var Alexa = require('alexa-sdk');
var allstops = require('uvastop.json');
var unirest = require('unirest');

//var uvacode = "41411";

// var centralGrounds = {
//   "McCormick Rd @ UVA Chapel": ["076"],
//   "McCormick Rd @ Garrett Hall": ["069"],
//   "McCormick Rd @ Thornton Hall": ["075"],
//   "McCormick Rd @ Gilmer Hall": ["070"],
//   "Alderman Rd @ Facilities Mgmt": ["005"],
//   "Copeley Rd @ Massie Rd (Inbound)": ["015"],
//   "Copeley Rd @ Massie Rd (Outbound)": ["016"],
//   "Copeley Rd @ Seymour Ct (Inbound)": ["017"],
//   "Copeley Rd @ Seymour Ct (Outbound)": ["018"],
//   "Seymour Ct (Inbound)": ["082"],
//   "Seymour Ct (Outbound)": ["083"],
//   "Seymour Ct @ Copeley Hill Housing": ["084"],
//   "U-Hall @ Copeley Rd": ["090"],
//   "U-Hall @ Massie Rd": ["091"],
//   "Massie Rd @ U-Hall East Lot": ["064"],
//   "Emmet St @ Goodwin Bridge": ["024"],
//   "Emmet/Ivy Garage": ["028"],
//   "Ivy Rd @ Emmet/Ivy Garage": ["041"],
//   "University Ave @ Carr's Hill Field": ["094"]
// };

// var colonnade = {
//   "McCormick Rd @ Alderman Library": ["098"],
//   "McCormick Rd @ Monroe Hall": ["072"],
//   "McCormick Rd @ Brown College (Night Stop)": ["066"],
//   "McCormick Rd @ Physics Building": ["074"],
//   "McCormick Rd @ McCormick Residence Hall": ["071"],
//   "Ivy Rd @ Food of All Nations": ["042"],
//   "Colonnade Dr @ University Heights": ["014"],
//   "Colonnade Dr @ Ivy Rd": ["013"],
//   "Massie Rd @ Faulkner Housing (Inbound)": ["060"],
//   "Massie Rd @ Faulkner Housing (Outbound)": ["061"],
//   "Duffy Blvd @ Darden": ["020"],
//   "Massie Rd @ U-Hall East Lot": ["064"],
//   "Emmet St @ Goodwin Bridge": ["024"],
//   "University Ave @ Snyder Tennis Courts": ["093"]
// };

// var greenRoute = {
//   "Emmet St @ Snyder Tennis Courts": ["027"],
//   "Emmet St @ Alumni Hall": ["022"],
//   "Emmet St @ Central Grounds Garage": ["023"],
//   "Emmet St @ Ruffner Hall": ["026"],
//   "Jefferson Park Ave @ Cabell Hall": ["044"],
//   "Jefferson Park Ave @ Brandon Ave": ["043"],
//   "Jefferson Park Ave @ UVA Hospital": ["052"],
//   "Lan Rd @ MR-5": ["056"],
//   "Lee St @ UVA Hospital": ["055"],
//   "Ivy Rd @ Emmet/Ivy Garage": ["041"],
//   "U-Hall @ Cage Lot": ["089"],
//   "U-Hall @ West Entrance": ["092"],
//   "U-Hall @ Massie Rd": ["091"],
//   "Massie Rd @ U-Hall East Lot": ["064"],
//   "Emmet St @ Goodwin Bridge": ["024"],
//   "Emmet/Ivy Garage (EIG)": ["028"]
// };

// var herefordIRC = {

// };

// var innerU = {
//   "Madison Ave @ Preston Ave":["058"],
//   "Preston Ave @ Washington Park":["079"],
//   "Grady Ave @ 10 and a half St NW (Westbound)":["036"],
//   "Grady Ave @ 14th St":["037"],
//   "14th Street NW @ Virginia Ave":["002"],
//   "Grady Ave @ 16th St":["034"],
//   "Rugby Rd @ Beta Bridge (Outbound)":[],
//   "McCormick Rd @ UVA Chapel":[],
//   "McCormick Rd @ Garrett Hall":[],
//   "McCormick Rd @ Thornton Hall":[],
//   "McCormick Rd @ Gilmer Hall":[],
//   "Alderman Road @ AFC":[],
//   "Whitehead Rd @ Engineering School (Inbound)":[],
//   "George Welsh Way @ Bryant Hall (Inbound)":[],
//   "George Welsh Way @ SAB":[],
//   "Alderman Rd @ Stadium Rd":[],
//   "Stadium Rd @ Appletree Rd":[],
//   "Mimosa Dr (Inbound)":[],
//   "Jefferson Park Ave @ Maury Ave":[],
//   "Jefferson Park Ave @ Shamrock Rd (Southbound)":[],
//   "Jefferson Park Ave @ Montebello Circle":[],
//   "Jefferson Park Ave @ Woodrow St":[],
//   "Jefferson Park Ave @ Cabell Hall":[],
//   "Jefferson Park Ave @ UVA Hospital":[],
//   "University Ave @ Jefferson Park Ave":[],
//   "14th Street NW @ Wertland St (Southbound)":["004"],
//   "14th Street NW @ Virginia Ave":[],
//   "Madison Ave @ Grady Ave":["057"]
// };

// var northline = {
//   "Emmet/Ivy Garage (EIG)": [],
//   "University Ave @ Carr's Hill Field": [],
//   "University Ave @ Snyder Tennis Courts": [],
//   "McCormick Rd @ UVA Chapel": [],
//   "McCormick Rd @ Alderman Library": [],
//   "McCormick Rd @ Garrett Hall": [],
//   "McCormick Rd @ Monroe Hall": [],
//   "McCormick Rd @ Thornton Hall": [],
//   "McCormick Rd @ McCormick Residence Hall": [],
//   "McCormick Rd @ Gilmer Hall": [],
//   "McCormick Rd @ O-Hill Dining Hall": [],
//   "Hereford Dr @ Kellogg Dorm": [],
//   "Hereford Dr @ Johnson House": [],
//   "Hereford Dr @ Runk Dining Hall": [],
//   "Stadium Rd @ Runk Dining Hall": [],
//   "Alderman Rd @ Gooch/Dillard": [],
//   "Alderman Rd @ O-Hill Dining Hall": [],
//   "Emmet St @ Goodwin Bridge": [],
//   "Emmet St @ Lambeth Housing": [],
//   "Massie Rd @ U-Hall East Lot": [],
//   "Massie Rd @ John Paul Jones Arena": [],
//   "U-Hall @ Massie Rd": [],
//   "Massie Rd @ John Paul Jones Arena (night stop)": [],
//   "Massie Rd @ Faulkner Housing (inbound)": [],
//   "Massie Rd @ Faulkner Housing (outbound)": [],
//   "Duffy Blvd @ North Grounds Rec": [],
//   "Duffy Blvd @ Darden": [],
//   "Massie Rd @ Law School": [],
//   "Massie Rd @ Copeley Student Housing": [],
//   "Arlington Blvd @ Massie Rd": [],
//   "Arlington Blvd @ Arlington Ct": [],
//   "Arlington Blvd @ Barracks Rd Shopping Ctr": []
// };

// var nursing = {

// };

// var outerU = {
//   "McCormick Rd @ Alderman Library":[],
//   "McCormick Rd @ Monroe Hall":[],
//   "McCormick Rd @ McCormick Residence Hall":[],
//   "Alderman Rd @ O-Hill Dining Hall":[],
//   "Whitehead Rd @ Engineering School (Outbound)":[],
//   "George Welsh Way @ Bryant Hall (Outbound)":[],
//   "George Welsh Way @ Scott Stadium":[],
//   "Alderman Rd @ Gooch/Dillard":[],
//   "Jefferson Park Ave @ Observatory Ave":[],
//   "Jefferson Park Ave @ Shamrock Rd (Northbound)":[],
//   "Jefferson Park Ave @ Kent Terrace":[],
//   "Jefferson Park Ave @ Valley Rd":[],
//   "Jefferson Park Ave @ Brandon Ave":[],
//   "Jefferson Park Ave @ Pinn Hall":[],
//   "14th Street NW @ Wertland St (Northbound)":[],
//   "14th Street NW @ John St":[],
//   "Madison Ave @ Grady Ave":[],
//   "Madison Ave @ Preston Ave":[],
//   "Preston Ave @ Washington Park":[],
//   "Grady Ave @ 10 and a half St NW (Westbound)":[],
//   "Grady Ave @ 14th St":[],
//   "Grady Ave @ Preston Pl":[],
//   "Rugby Rd @ 203 Rugby":[]
// };

// var specialRoute = {

// };

// var stadiumShuttle = {

// };

module.exports = {
  sendResponse: function sendResponse(slotVal) {

    /*
    Example TransLoc info retrieval to calculate minutes until next arrival
    @author: Brittany Crow
    @date: 4/24/2018
    */

    //dummy stop id
    var userStop = "4123990";

    var res;
    var stopId, stopName;

    for (var key in allstops) {
      if (key == userStop) {
          stopId = key;
          stopName = allstops[key];
      }
    }


      // format URL for arrival retrieval
    var arrivalURL = "https://transloc-api-1-2.p.mashape.com/arrival-estimates.json?agencies=347&callback=call&stops=" + stopId;

    unirest.get(arrivalURL)
    .header("X-Mashape-Key", "ETII3zzfohmshtjiWu6eC5SB6SZTp1j1WMvjsnph4EClUNixrP")
    .header("Accept", "application/json")
    .end(function (result) {
      var nextArrival = result.body.data[0]["arrivals"][0]["arrival_at"];

      // turn retrieved time and current time into Date objects
      var dateFormat = new Date(nextArrival);
      var currentTime = new Date();

      // convert Date objects into milliseconds
      var dateFormatInt = dateFormat.getTime();
      var currentTimeInt = currentTime.getTime();

      // calculate difference in minutes
      var minutesLeft = (dateFormatInt - currentTimeInt)/60000;
      var floored = Math.floor(minutesLeft);
      if(floored == 0)
        res = "Bus is at " + stopName + " right now!";
      else
        res = "Bus will arrive at " + stopName + " in " + floored + " minutes!";
      });

    return(res);
  }
}

    /*var stops = require('stops.json');
    var arrivalStop, stopName;
    for (var stop in stops) {
      if (stop.toLowerCase() == slotValue.toLowerCase()) {
        stopName = stop.toLowerCase();
        arrivalStopI= stops[stop.toLowerCase()];
      }
    }
    
    var time;
    unirest.get("https://transloc-api-1-2.p.mashape.com/arrival-estimates.json?agencies="+agencyId+"&callback=call&stops="+arrivalStop)
      .header("X-Mashape-Key", "JOUox9Z3VdmshRuosuHsesx7tlIAp1YPp1jjsnkuiWVBsnXhcw")
      .header("Accept", "application/json")
      .end(function (result) {
        //DOES THIS WORK???
          var arrivalTime = Date.parse(result.body.data.arrival_at);
          var requestTime = Date.parse(result.body.generated_on);
          var diff = arrivalTime - requestTime;
          time = diff/60000;
    });

    var res = "The next bus for "+stopName+" arrives in "+time+" minutes.";
    return (res);
  }
}*/
