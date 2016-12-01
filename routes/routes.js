module.exports = function(app){

    app.get('/login', function(req, res){
        res.render('login', {
            title: 'Express Login'
        });
    });

    app.get('/', function(req,res) {
        res.render('index', {
          City: 'Austin' ,
        	springTemperature: "60 - 82",
        	springPercipitation: "Wet",
        	springHumidity: "10% - 20%",
        	springWind: "12 mph",

        	summerTemperature: "86 - 112",
        	summerPercipitation: "Very Dry",
        	summerHumidity: "0% - 3%",
        	summerWind: "14 mph",

        	fallTemperature: "60 - 78",
        	fallPercipitation: "Very Wet",
        	fallHumidity: "1% - 2%",
        	fallWind: "18 mph",

        	winterTemperature: "42 - 67",
        	winterPercipitation: "Dry",
        	winterHumidity: "0% - 2%",
        	winterWind: "8 mph",
        });
    });
}
