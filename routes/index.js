var express = require('express');
var router = express.Router();
var models = require('../models');
// var sequelizeConnection = models.sequelize;
// sequelizeConnection.sync();


/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', {
//   	City: 'Austin' ,
//   	springTemperature: "60 - 82",
//   	springPercipitation: "Wet",
//   	springHumidity: "10% - 20%",
//   	springWind: "12 mph",


//   	summerTemperature: "86 - 112",
//   	summerPercipitation: "Very Dry",
//   	summerHumidity: "0% - 3%",
//   	summerWind: "14 mph",
//
//   	fallTemperature: "60 - 78",
//   	fallPercipitation: "Very Wet",
//   	fallHumidity: "1% - 2%",
//   	fallWind: "18 mph",
//
//   	winterTemperature: "42 - 67",
//   	winterPercipitation: "Dry",
//   	winterHumidity: "0% - 2%",
//   	winterWind: "8 mph",
//
// });
// });
//
// router.get('/', function(request, response) {
// 	response.render('splash', {
//
// 	})


router.get('/austin', function(request, response) {
console.log("help");
    models.Campmabrymin.findAll({
        attributes: ['DATE', 'HOURLYDRYBULBTEMPF']
    }).then(function(data){
        // var datajson = json.parse(data);
        // response.render('index', {
        //     data: datajson
        // });
        var dataJson = json.parse(data);
        response.render('index', {
            data: dataJson
        });

	});
});



module.exports = router;
