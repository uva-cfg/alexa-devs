var unirest = require('unirest');

/* get stop information

unirest.get("https://transloc-api-1-2.p.mashape.com/stops.json?agencies=347")
.header("X-Mashape-Key", "JOUox9Z3VdmshRuosuHsesx7tlIAp1YPp1jjsnkuiWVBsnXhcw")
.header("Accept", "application/json")
.end(function (result) {
	console.log("{");
	for (var i = 0; i < result.body.data.length-1; i++) {
		console.log('"'+result.body.data[i]["name"]+'": "'+result.body.data[i]["stop_id"]+'",');
	}
	console.log('"'+result.body.data[i]["name"]+'": "'+result.body.data[result.body.data.length-1]["stop_id"]+'"');
	console.log("}");
});*/

unirest.get("https://transloc-api-1-2.p.mashape.com/vehicles.json?agencies=12%2C16&callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&routes=4000421%2C4000592%2C4005122")
.header("X-Mashape-Key", "JOUox9Z3VdmshRuosuHsesx7tlIAp1YPp1jjsnkuiWVBsnXhcw")
.header("Accept", "application/json")
.end(function (result) {
  console.log("{");
	for (var i = 0; i < result.body.data.length-1; i++) {
		console.log('"'+result.body.data[i]["vehicle_id"]+'": "'+result.body.data[i]["route_id"]+'",');
	}
	console.log('"'+result.body.data[i]["vehicle_id"]+'": "'+result.body.data[result.body.data.length-1]["route_id"]+'"');
	console.log("}");
});