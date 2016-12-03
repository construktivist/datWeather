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
//
// router.get('/', function(request, response) {
// 	response.render('splash', {
//
// 	})


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

router.get('/austin/spring', function(request, response) {
    models.spring.findAll({
        attributes: ['HOURLYDRYBULBTEMPF']
    }).then(function(data){
        // console.log(response.json(data));
        // return response.json(data);
        //    calculate the standard deviation

        var tempArray = [];
        for (var i = 0; i < data.length; i++) {
            tempArray.push(data[i].HOURLYDRYBULBTEMPF);
        }

        console.log("sum: %s", stats.sum(tempArray));
        console.log("mean: %s", stats.mean(tempArray));
        console.log("median: %s", stats.median(tempArray));
        console.log("mode: %s", stats.mode(tempArray));
        console.log("standard deviation: %s", stats.stdev(tempArray));

    });









});

module.exports = router;


