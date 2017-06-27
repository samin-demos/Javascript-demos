//services
weatherApp.service('cityService', function(){
    
    this.city = "New York, NY";
});


weatherApp.service('weatherService', ['$resource', function($resource){
    
    this.GetWeather = function(city, days){
	    var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
	    {callback: "JSON_CALLBACK"}, {get: {method:"JSONP"}});
	        
	    return weatherApi.get({q: city , cnt: days, appid: "2e67af599ceeac1727f78b8ea55a8636"});
    };
    
}]);