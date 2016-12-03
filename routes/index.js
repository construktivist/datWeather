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


        var springtempArray = [];
        var springprecipArray = [];
        var springwindArray = [];

        //Loop over the sql array
        for (var i = 0; i < data.length; i++) {
            springtempArray.push(data[i].HOURLYDRYBULBTEMPF);
            springprecipArray.push(data[i].HOURLYPrecip);
            springwindArray.push(data[i].HOURLYWindSpeed);
        }

        //
        //Temps
        //


        springStats.springTempMean = stats.mean(springtempArray);
        springStats.springTempMedian = stats.median(springtempArray);
        springStats.springTempMode = stats.mode(springtempArray);
        springStats.springTempStdev = stats.stdev(springtempArray);

        //
        //Rains
        //

        console.log("mean: %s", stats.mean(springprecipArray));
        console.log("median: %s", stats.median(springprecipArray));
        console.log("mode: %s", stats.mode(springprecipArray));
        console.log("standard deviation: %s", stats.stdev(springprecipArray));


        //
        //Winds
        //

        console.log("mean: %s", stats.mean(springwindArray));
        console.log("median: %s", stats.median(springwindArray));
        console.log("mode: %s", stats.mode(springwindArray));
        console.log("standard deviation: %s", stats.stdev(springwindArray));
    }).then(function (data) {
            //Summer
            models.summer.findAll({
                attributes: ['HOURLYDRYBULBTEMPF', 'HOURLYPrecip', 'HOURLYWindSpeed']
            }).then(function (data) {
                // console.log(response.json(data));
                // return response.json(data);

                var summertempArray = [];
                var summerprecipArray = [];
                var summerwindArray = [];


                //Loop over the sql array
                for (var i = 0; i < data.length; i++) {
                    summertempArray.push(data[i].HOURLYDRYBULBTEMPF);
                    summerprecipArray.push(data[i].HOURLYPrecip);
                    summerwindArray.push(data[i].HOURLYWindSpeed);
                }

                //
                //Temps
                //
                console.log("=======");
                console.log("Temps");
                console.log("=======");

                console.log("mean: %s", stats.mean(summertempArray));
                console.log("median: %s", stats.median(summertempArray));
                console.log("mode: %s", stats.mode(summertempArray));
                console.log("standard deviation: %s", stats.stdev(summertempArray));

                //
                //Rains
                //
                console.log("=======");
                console.log("Rains");
                console.log("=======");
                console.log("mean: %s", stats.mean(summerprecipArray));
                console.log("median: %s", stats.median(summerprecipArray));
                console.log("mode: %s", stats.mode(summerprecipArray));
                console.log("standard deviation: %s", stats.stdev(summerprecipArray));

                //
                //Winds
                //
                console.log("=======");
                console.log("Winds");
                console.log("=======");
                console.log("mean: %s", stats.mean(summerwindArray));
                console.log("median: %s", stats.median(summerwindArray));
                console.log("mode: %s", stats.mode(summerwindArray));
                console.log("standard deviation: %s", stats.stdev(summerwindArray));
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
	        fallStats.fallTempMean = stats.mean(fallTempArray);
	        fallStats.fallTempMedian = stats.median(fallTempArray);
	        fallStats.fallTempMode = stats.mode(fallTempArray);
	        fallStats.fallTempStdev = stats.stdev(fallTempArray);

            //
            //Rains
            //
	        fallStats.fallPercipMean = stats.mean(fallPercipArray);
	        fallStats.fallPercipMedian = stats.median(fallPercipArray);
	        fallStats.fallPercipMode = stats.mode(fallPercipArray);
	        fallStats.fallPercipStdev = stats.stdev(fallPercipArray);

            //
            //Winds
            //
	        fallStats.fallWindMean = stats.mean(fallWindArray);
	        fallStats.fallWindMedian = stats.median(fallWindArray);
	        fallStats.fallWindMode = stats.mode(fallWindArray);
	        fallStats.fallWindStdev = stats.stdev(fallWindArray);
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
	        winterStats.winterTempMean = stats.mean(winterTempArray);
	        winterStats.winterTempMedian = stats.median(winterTempArray);
	        winterStats.winterTempMode = stats.mode(winterTempArray);
	        winterStats.winterTempStdev = stats.stdev(winterTempArray);

            //
            //Rains
            //
	        winterStats.winterPercipMean = stats.mean(winterPercipArray);
	        winterStats.winterPercipMedian = stats.median(winterPercipArray);
	        winterStats.winterPercipMode = stats.mode(winterPercipArray);
	        winterStats.winterPercipStdev = stats.stdev(winterPercipArray);

            //
            //Winds
            //
	        winterStats.winterWindMean = stats.mean(winterWindArray);
	        winterStats.winterWindMedian = stats.median(winterWindArray);
	        winterStats.winterWindMode = stats.mode(winterWindArray);
	        winterStats.winterWindStdev = stats.stdev(winterWindArray);
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