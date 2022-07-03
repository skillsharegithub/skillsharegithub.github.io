"use strict"






function findWeather(){
	var citySearch = ($("#citySearch").val());

	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=5d2ce3bbcc69c403e9adab59056dd483";
	$.ajax ({
	url: url,
	success: function(result){
		//console.log(result);
		$("#errCity").hide();
		$("#location").text(result.name);

		let F = Math.round(result.main.temp * (9/5) - 459.67);
		let Fahrenheit = F.toString();

var fTemp = F;
  var fToCel = (Math.round((fTemp - 32) * 5 / 9)).toString();
		$("#temp").text(Fahrenheit + "°F / " + fToCel + "°C");

		// let windSpeed = Math.round(result.wind.speed / .44704);
		// let wind = windSpeed.toString();
		// $("#wind").text(result.wind.speed);

		$("#sky").text(result.weather[0].description);
		$("#wdata").show();
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
	$("#errCity").text("Weather Data for " + citySearch + " is not found.");
	$("#errCity").show();
	}
})

}