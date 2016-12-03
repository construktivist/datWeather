var express = require('express');
var router = express.Router();
var models = require('../models');
// var sequelizeConnection = models.sequelize;
// sequelizeConnection.sync();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {

    });
});


router.get('/austin', function(request, response) {
    console.log(request);
    console.log(response);

    models.Datweather.findAll({
        attributes: ['DATE', 'HOURLYDRYBULBTEMPF']
    }).then(function(data){
        console.log(data.get)
        // var datajson = json.parse(data);
        // response.render('index', {
        //     data: datajson
        // });
        // var dataJson = json.parse(data);
        // response.render('index', {
        //     data: dataJson
        });

    });
});



module.exports = router;
