unirest.get("https://transloc-api-1-2.p.mashape.com/stops.json?agencies=347&callback=call")
    .header("X-Mashape-Key", "ETII3zzfohmshtjiWu6eC5SB6SZTp1j1WMvjsnph4EClUNixrP")
    .header("Accept", "application/json")
    .end(function (result) {

      /*sampleStop = result.body.data[0]["stop_id"];
      stopName = result.body.data[0]["name"];

      // format URL for arrival retrieval
      var arrivalURL = "https://transloc-api-1-2.p.mashape.com/arrival-estimates.json?agencies=347&callback=call&stops=" + sampleStop;

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
      });*/
      console.log(result)
    });