const base64url = require('base64url');
const crypto = require('crypto');

var secret = "secret";

module.exports = function(app) {

    app.get('/login', function(req, res) {
        if (req.query !== {}) {
            if (typeof req.query.email == 'undefined') {
                res.render('login');
            } else {
              var header = {
                  "typ": "JWT",
                  "alg": "HS256"
              };
              var payload = {
                  "email": req.query.email,
                  "password": req.query.password,
              };
              var user_credentials = base64url(String(header)) + "." + base64url(String(payload));
              var hash = crypto.createHmac('sha256',secret).update(user_credentials).digest('hex');
              var jwt = user_credentials + "." + hash;
              console.log(jwt);
              res.redirect('/validate/?check=' + jwt);
            }
        }
    });

    app.get('/', function(req, res) {
        res.render('index', {
            City: 'Austin',
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

    app.get('/validate', function(req, res) {
        var credentials = req.params.check;
        res.render('home', {
            email: credentials,
            password: "hahaha",
        });
    });
}
