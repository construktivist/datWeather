var apiKey = "";
var start = "";
var end = "";
var cityID = "";
var cityName = "austin";
var lat = "";
var lon = "";


/*============
By city ID
============*/
/*
 Parameters:

 id city ID

 type type of the call, keep this parameter in the API call as 'hour'

 start start date (unix time, UTC time zone), e.g. start=1369728000

 end end date (unix time, UTC time zone), e.g. end=1369789200

 cnt amount of returned data (one per hour, can be used instead of 'end')

 Examples of API calls:

 http://history.openweathermap.org/data/2.5/history/city?id=2885679&type=hour
 */

// city ID API call end:
    var cityIdEndApiCallUrl = "http://history.openweathermap.org/data/2.5/history/city?id=" +
        "{id}" +
        "&type=hour&start=" +
        "{start}" +
        "&end=" +
        "{end}";

// city ID API call cnt:
    var cityIdApiCntCallUrl = "http://history.openweathermap.org/data/2.5/history/city?id=" +
        "{id}" +
        "&type=hour&start=" +
        "{start}" +
        "&cnt={cnt}";


/*============
 By city name
============*/
/*
 Parameters:

 q city name and country code divided by comma, use ISO 3166 country codes

 type type of the call, keep this parameter in the API call as 'hour'

 start start date (unix time, UTC time zone), e.g. start=1369728000

 end end date (unix time, UTC time zone), e.g. end=1369789200

 cnt amount of returned data (one per hour, can be used instead of 'end')

 Examples of API calls:

 http://history.openweathermap.org/data/2.5/history/city?q=London,UK
 */

// city name API call end:
var cityNameEndApiCallUrl = "http://history.openweathermap.org/data/2.5/history/city?q=" +
    "{city ID}" +
    ",{country code}" +
    "&type=hour&start=" +
    "{start}" +
    "&end=" +
    "{end}";

// city name API call cnt:
var cityNameCntApiCallUrl = "http://history.openweathermap.org/data/2.5/history/city?q=" +
    "{city ID}" +
    "," +
    "{country code}" +
    "&type=hour&start=" +
    "{start}" +
    "&cnt=" +
    "{cnt}";



/* ========================
 By geographic coordinates
 =======================*/
/*
Parameters:

 lat, lon coordinates of the location of your interest

 type type of the call, keep this parameter in the API call as 'hour'

 start start date (unix time, UTC time zone), e.g. start=1369728000

 end end date (unix time, UTC time zone), e.g. end=1369789200

 cnt amount of returned data (one per hour, can be used instead of 'end')

 Examples of API calls:

 http://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65
 */

// geographic coordinates API call end:
var geoCodeEndApiCallUrl = "http://history.openweathermap.org/data/2.5/history/city?lat=" +
    "{lat}" +
    "&lon=" +
    "{lon}" +
    "&type=hour&start=" +
    "{start}" +
    "&end=" +
    "{end}";

// geographic coordinates API call cnt:
var geoCodeCntApiCallUrl =  "http://history.openweathermap.org/data/2.5/history/city?lat=" +
    "{lat}" +
    "&lon=" +
    "{lon}" +
    "&type=hour&start=" +
    "{start}" +
    "&cnt=" +
    "{cnt}";




 cityIdEndApiCallUrl
 cityIdApiCntCallUrl
 cityNameEndApiCallUrl
 cityNameCntApiCallUrl
 geoCodeApiCallUrl
 geoCodeApiCallUrl



console.log(apiUrl);



















