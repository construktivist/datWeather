var express = require('express');
var router = express.Router();
var models = require('../models');
var stats = require("stats-lite");

// var sequelizeConnection = models.sequelize;
// sequelizeConnection.sync();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	City: 'New York' ,
  	springTemperature: "60 - 82",
  	springPercipitation: "Wet",
  	springHumidity: "10% - 20%",
  	springWind: "12 mph",


  	summerTemperature: "86 - 103",
  	summerPercipitation: "Very Dry",
  	summerHumidity: "0% - 3%",
  	summerWind: "14 mph",

  	fallTemperature: "60 - 78",
  	fallPercipitation: "Very Wet",
  	fallHumidity: "1% - 2%",
  	fallWind: "18 mph",

  	winterTemperature: "13 - 67",
  	winterPercipitation: "Dry",
  	winterHumidity: "0% - 2%",
  	winterWind: "8 mph"

    });
});

var springStats = {};
var summerStats = {};
var fallStats = {};
var winterStats = {};

//================
//Get all the data
//================
router.post("/city", function(request, response){

    var cityName = request.body.city;
    console.log(cityName);
    var condition = cityName.toUpperCase();

    console.log("condition:", condition);


    //Spring
    models.spring.findAll({
        attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip', 'HOURLYWindSpeed']
    }).then(function (data) {
        // console.log(response.json(data));
        // return response.json(data);


        var springTempArray = [];
        var springPrecipArray = [];
        var springWindArray = [];

        //Loop over the sql array
        for (var i = 0; i < data.length; i++) {
            springTempArray.push(data[i].HOURLYDRYBULBTEMPF);
            springPrecipArray.push(data[i].HOURLYPrecip);
            springWindArray.push(data[i].HOURLYWindSpeed);
        }

        //
        //Temps
        //

        console.log("mean: %s", stats.mean(springTempArray));
        console.log("median: %s", stats.median(springTempArray));
        console.log("mode: %s", stats.mode(springTempArray));
        console.log("standard deviation: %s", stats.stdev(springTempArray));
        springStats.springTempMean = stats.mean(springTempArray);
        springStats.springTempMedian = stats.median(springTempArray);
        springStats.springTempMode = stats.mode(springTempArray);
        springStats.springTempStdev = stats.stdev(springTempArray);

        //
        //Rains
        //

        console.log("mean: %s", stats.mean(springPrecipArray));
        console.log("median: %s", stats.median(springPrecipArray));
        console.log("mode: %s", stats.mode(springPrecipArray));
        console.log("standard deviation: %s", stats.stdev(springPrecipArray));
        springStats.springRainMean = stats.mean(springPrecipArray);
        springStats.springRainMedian = stats.median(springPrecipArray);
        springStats.springRainMode = stats.mode(springPrecipArray);
        springStats.springRainStdev = stats.stdev(springPrecipArray);


        //
        //Winds
        //

        console.log("mean: %s", stats.mean(springWindArray));
        console.log("median: %s", stats.median(springWindArray));
        console.log("mode: %s", stats.mode(springWindArray));
        console.log("standard deviation: %s", stats.stdev(springWindArray));
        springStats.springWindMean = stats.mean(springWindArray);
        springStats.springWindMedian = stats.median(springWindArray);
        springStats.springWindMode = stats.mode(springWindArray);
        springStats.springWindStdev = stats.stdev(springWindArray);






    }).then(function (data) {
            //Summer
            models.summer.findAll({
                attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip', 'HOURLYWindSpeed']
            }).then(function (data) {
                // console.log(response.json(data));
                // return response.json(data);

                var summerTempArray = [];
                var summerPrecipArray = [];
                var summerWindArray = [];


                //Loop over the sql array
                for (var i = 0; i < data.length; i++) {
                    summertempArray.push(data[i].HOURLYDRYBULBTEMPF);
                    summerprecipArray.push(data[i].HOURLYPrecip);
                    summerwindArray.push(data[i].HOURLYWindSpeed);
                }

                //
                //Temps
                //

                console.log("mean: %s", stats.mean(summerTempArray));
                console.log("median: %s", stats.median(summerTempArray));
                console.log("mode: %s", stats.mode(summerTempArray));
                console.log("standard deviation: %s", stats.stdev(summerTempArray));
                springStats.springTempMean = stats.mean(summerTempArray);
                springStats.springTempMedian = stats.median(summerTempArray);
                springStats.springTempMode = stats.mode(summerTempArray);
                springStats.springTempStdev = stats.stdev(summerTempArray);

                //
                //Rains
                //

                console.log("mean: %s", stats.mean(summerPrecipArray));
                console.log("median: %s", stats.median(summerPrecipArray));
                console.log("mode: %s", stats.mode(summerPrecipArray));
                console.log("standard deviation: %s", stats.stdev(summerPrecipArray));
                springStats.springRainMean = stats.mean(summerPrecipArray);
                springStats.springRainMedian = stats.median(summerPrecipArray);
                springStats.springRainMode = stats.mode(summerPrecipArray);
                springStats.springRainStdev = stats.stdev(summerPrecipArray);


                //
                //Winds
                //

                console.log("mean: %s", stats.mean(summerWindArray));
                console.log("median: %s", stats.median(summerWindArray));
                console.log("mode: %s", stats.mode(summerWindArray));
                console.log("standard deviation: %s", stats.stdev(summerWindArray));
                springStats.springWindMean = stats.mean(summerWindArray);
                springStats.springWindMedian = stats.median(summerWindArray);
                springStats.springWindMode = stats.mode(summerWindArray);
                springStats.springWindStdev = stats.stdev(summerWindArray);
            })
        }).then(function(data) {
        //Fall
        models.fall.findAll({
            attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip', 'HOURLYWindSpeed']
        }).then(function (data) {
            // console.log(response.json(data));
            // return response.json(data);

            var tempArray = [];
            var precipArray = [];
            var windArray = [];


            //Loop over the sql array
            for (var i = 0; i < data.length; i++) {
                tempArray.push(data[i].HOURLYDRYBULBTEMPF);
                precipArray.push(data[i].HOURLYPrecip);
                windArray.push(data[i].HOURLYWindSpeed);
            }

            //
            //Temps
            //
            console.log("=======");
            console.log("Temps");
            console.log("=======");

            console.log("mean: %s", stats.mean(tempArray));
            console.log("median: %s", stats.median(tempArray));
            console.log("mode: %s", stats.mode(tempArray));
            console.log("standard deviation: %s", stats.stdev(tempArray));

            //
            //Rains
            //
            console.log("=======");
            console.log("Rains");
            console.log("=======");
            console.log("mean: %s", stats.mean(precipArray));
            console.log("median: %s", stats.median(precipArray));
            console.log("mode: %s", stats.mode(precipArray));
            console.log("standard deviation: %s", stats.stdev(precipArray));

            //
            //Winds
            //
            console.log("=======");
            console.log("Winds");
            console.log("=======");
            console.log("mean: %s", stats.mean(windArray));
            console.log("median: %s", stats.median(windArray));
            console.log("mode: %s", stats.mode(windArray));
            console.log("standard deviation: %s", stats.stdev(windArray));
        })
    }).then(function(data) {
        //    Winter
        models.winter.findAll({
            attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip', 'HOURLYWindSpeed']
        }).then(function (data) {
            // console.log(response.json(data));
            // return response.json(data);

            var tempArray = [];
            var precipArray = [];
            var windArray = [];


            //Loop over the sql array
            for (var i = 0; i < data.length; i++) {
                tempArray.push(data[i].HOURLYDRYBULBTEMPF);
                precipArray.push(data[i].HOURLYPrecip);
                windArray.push(data[i].HOURLYWindSpeed);
            }

            //
            //Temps
            //
            console.log("=======");
            console.log("Temps");
            console.log("=======");

            console.log("mean: %s", stats.mean(tempArray));
            console.log("median: %s", stats.median(tempArray));
            console.log("mode: %s", stats.mode(tempArray));
            console.log("standard deviation: %s", stats.stdev(tempArray));

            //
            //Rains
            //
            console.log("=======");
            console.log("Rains");
            console.log("=======");
            console.log("mean: %s", stats.mean(precipArray));
            console.log("median: %s", stats.median(precipArray));
            console.log("mode: %s", stats.mode(precipArray));
            console.log("standard deviation: %s", stats.stdev(precipArray));

            //
            //Winds
            //
            console.log("=======");
            console.log("Winds");
            console.log("=======");
            console.log("mean: %s", stats.mean(windArray));
            console.log("median: %s", stats.median(windArray));
            console.log("mode: %s", stats.mode(windArray));
            console.log("standard deviation: %s", stats.stdev(windArray));
        })
    }).then(function (springStats, summerStats, fallStats, winterStats){
        response.render("index", {
            City: condition,
            springTemperature: "60 - 82",
            springPercipitation: "Wet",
            springHumidity: "10% - 20%",
            springWind: "12 mph",


            summerTemperature: "86 - 103",
            summerPercipitation: "Very Dry",
            summerHumidity: "0% - 3%",
            summerWind: "14 mph",

            fallTemperature: "60 - 78",
            fallPercipitation: "Very Wet",
            fallHumidity: "1% - 2%",
            fallWind: "18 mph",

            winterTemperature: "13 - 67",
            winterPercipitation: "Dry",
            winterHumidity: "0% - 2%",
            winterWind: "8 mph"

        });

        })
    })
});    //END OF ROUTE




//
// //
// //Spring Route
// //
// router.get('/austin/spring', function(request, response) {
//     models.spring.findAll({
//         attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip','HOURLYWindSpeed' ]
//     }).then(function(data) {
//         // console.log(response.json(data));
//         // return response.json(data);
//
//         var tempArray = [];
//         var precipArray = [];
//         var windArray = [];
//
//
//         //Loop over the sql array
//         for (var i = 0; i < data.length; i++) {
//             tempArray.push(data[i].HOURLYDRYBULBTEMPF);
//             precipArray.push(data[i].HOURLYPrecip);
//             windArray.push(data[i].HOURLYWindSpeed);
//         }
//
//         //
//         //Temps
//         //
//         console.log("=======");
//         console.log("Temps");
//         console.log("=======");
//
//         console.log("mean: %s", stats.mean(tempArray));
//         console.log("median: %s", stats.median(tempArray));
//         console.log("mode: %s", stats.mode(tempArray));
//         console.log("standard deviation: %s", stats.stdev(tempArray));
//
//         //
//         //Rains
//         //
//         console.log("=======");
//         console.log("Rains");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(precipArray));
//         console.log("median: %s", stats.median(precipArray));
//         console.log("mode: %s", stats.mode(precipArray));
//         console.log("standard deviation: %s", stats.stdev(precipArray));
//
//         //
//         //Winds
//         //
//         console.log("=======");
//         console.log("Winds");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(windArray));
//         console.log("median: %s", stats.median(windArray));
//         console.log("mode: %s", stats.mode(windArray));
//         console.log("standard deviation: %s", stats.stdev(windArray));
//     })
// });

//
// //
// //summer Route
// //
// router.get('/austin/summer', function(request, response) {
//     models.summer.findAll({
//         attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip','HOURLYWindSpeed' ]
//     }).then(function(data) {
//         // console.log(response.json(data));
//         // return response.json(data);
//
//         var tempArray = [];
//         var precipArray = [];
//         var windArray = [];
//
//
//         //Loop over the sql array
//         for (var i = 0; i < data.length; i++) {
//             tempArray.push(data[i].HOURLYDRYBULBTEMPF);
//             precipArray.push(data[i].HOURLYPrecip);
//             windArray.push(data[i].HOURLYWindSpeed);
//         }
//
//         //
//         //Temps
//         //
//         console.log("=======");
//         console.log("Temps");
//         console.log("=======");
//
//         console.log("mean: %s", stats.mean(tempArray));
//         console.log("median: %s", stats.median(tempArray));
//         console.log("mode: %s", stats.mode(tempArray));
//         console.log("standard deviation: %s", stats.stdev(tempArray));
//
//         //
//         //Rains
//         //
//         console.log("=======");
//         console.log("Rains");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(precipArray));
//         console.log("median: %s", stats.median(precipArray));
//         console.log("mode: %s", stats.mode(precipArray));
//         console.log("standard deviation: %s", stats.stdev(precipArray));
//
//         //
//         //Winds
//         //
//         console.log("=======");
//         console.log("Winds");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(windArray));
//         console.log("median: %s", stats.median(windArray));
//         console.log("mode: %s", stats.mode(windArray));
//         console.log("standard deviation: %s", stats.stdev(windArray));
//     })
// });

// router.post("/city", function(request, response){
// 	var cityName = request.body.city;
// 	console.log(cityName);
// 	var condition = cityName.toUpperCase();
//
// 	console.log("condition:", condition);
//
// 	response.render("index", {
// 		City: condition,
// 	})
// })







// router.get('/:austin', function(request, response) {
// console.log("help");
//     models.Campmabrymin.findAll({
//         attributes: ['DATE', 'HOURLYDRYBULBTEMPF']
//     }).then(function(data){
//         // var datajson = json.parse(data);
//         // response.render('index', {
//         //     data: datajson
//         // });
//         var dataJson = json.parse(data);
//         response.render('index', {
//             data: dataJson
//         });

// 	});
// });

// router.get('/austin', function(request, response) {
// console.log("help");
//     models.Datweather.findAll({
//         attributes: ['DATE', 'HOURLYDRYBULBTEMPF']
//     }).then(function(data){
//         // var datajson = json.parse(data);
//         // response.render('index', {
//         //     data: datajson
//         // });
//         var dataJson = json.parse(data);
//         response.render('index', {
//             data: dataJson
//         });
//
// 	});
// });


//
// //
// //fall Route
// //
// router.get('/austin/fall', function(request, response) {
//     models.fall.findAll({
//         attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip','HOURLYWindSpeed' ]
//     }).then(function(data) {
//         // console.log(response.json(data));
//         // return response.json(data);
//
//         var tempArray = [];
//         var precipArray = [];
//         var windArray = [];
//
//
//         //Loop over the sql array
//         for (var i = 0; i < data.length; i++) {
//             tempArray.push(data[i].HOURLYDRYBULBTEMPF);
//             precipArray.push(data[i].HOURLYPrecip);
//             windArray.push(data[i].HOURLYWindSpeed);
//         }
//
//         //
//         //Temps
//         //
//         console.log("=======");
//         console.log("Temps");
//         console.log("=======");
//
//         console.log("mean: %s", stats.mean(tempArray));
//         console.log("median: %s", stats.median(tempArray));
//         console.log("mode: %s", stats.mode(tempArray));
//         console.log("standard deviation: %s", stats.stdev(tempArray));
//
//         //
//         //Rains
//         //
//         console.log("=======");
//         console.log("Rains");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(precipArray));
//         console.log("median: %s", stats.median(precipArray));
//         console.log("mode: %s", stats.mode(precipArray));
//         console.log("standard deviation: %s", stats.stdev(precipArray));
//
//         //
//         //Winds
//         //
//         console.log("=======");
//         console.log("Winds");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(windArray));
//         console.log("median: %s", stats.median(windArray));
//         console.log("mode: %s", stats.mode(windArray));
//         console.log("standard deviation: %s", stats.stdev(windArray));
//     })
// });
//
//
// //
// //winter Route
// //
// router.get('/austin/winter', function(request, response) {
//     models.winter.findAll({
//         attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip','HOURLYWindSpeed' ]
//     }).then(function(data) {
//         // console.log(response.json(data));
//         // return response.json(data);
//
//         var tempArray = [];
//         var precipArray = [];
//         var windArray = [];
//
//
//         //Loop over the sql array
//         for (var i = 0; i < data.length; i++) {
//             tempArray.push(data[i].HOURLYDRYBULBTEMPF);
//             precipArray.push(data[i].HOURLYPrecip);
//             windArray.push(data[i].HOURLYWindSpeed);
//         }
//
//         //
//         //Temps
//         //
//         console.log("=======");
//         console.log("Temps");
//         console.log("=======");
//
//         console.log("mean: %s", stats.mean(tempArray));
//         console.log("median: %s", stats.median(tempArray));
//         console.log("mode: %s", stats.mode(tempArray));
//         console.log("standard deviation: %s", stats.stdev(tempArray));
//
//         //
//         //Rains
//         //
//         console.log("=======");
//         console.log("Rains");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(precipArray));
//         console.log("median: %s", stats.median(precipArray));
//         console.log("mode: %s", stats.mode(precipArray));
//         console.log("standard deviation: %s", stats.stdev(precipArray));
//
//         //
//         //Winds
//         //
//         console.log("=======");
//         console.log("Winds");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(windArray));
//         console.log("median: %s", stats.median(windArray));
//         console.log("mode: %s", stats.mode(windArray));
//         console.log("standard deviation: %s", stats.stdev(windArray));
//     })
// });
//
//
// //
// //Spring Route
// //
// router.get('/austin/spring', function(request, response) {
//     models.spring.findAll({
//         attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip','HOURLYWindSpeed' ]
//     }).then(function(data) {
//         // console.log(response.json(data));
//         // return response.json(data);
//
//         var tempArray = [];
//         var precipArray = [];
//         var windArray = [];
//
//
//         //Loop over the sql array
//         for (var i = 0; i < data.length; i++) {
//             tempArray.push(data[i].HOURLYDRYBULBTEMPF);
//             precipArray.push(data[i].HOURLYPrecip);
//             windArray.push(data[i].HOURLYWindSpeed);
//         }
//
//         //
//         //Temps
//         //
//         console.log("=======");
//         console.log("Temps");
//         console.log("=======");
//
//         console.log("mean: %s", stats.mean(tempArray));
//         console.log("median: %s", stats.median(tempArray));
//         console.log("mode: %s", stats.mode(tempArray));
//         console.log("standard deviation: %s", stats.stdev(tempArray));
//
//         //
//         //Rains
//         //
//         console.log("=======");
//         console.log("Rains");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(precipArray));
//         console.log("median: %s", stats.median(precipArray));
//         console.log("mode: %s", stats.mode(precipArray));
//         console.log("standard deviation: %s", stats.stdev(precipArray));
//
//         //
//         //Winds
//         //
//         console.log("=======");
//         console.log("Winds");
//         console.log("=======");
//         console.log("mean: %s", stats.mean(windArray));
//         console.log("median: %s", stats.median(windArray));
//         console.log("mode: %s", stats.mode(windArray));
//         console.log("standard deviation: %s", stats.stdev(windArray));
//     })
// });


module.exports = router;