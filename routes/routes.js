const base64url = require('base64url');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

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
                }
                var payload = {
                    "email": String(req.query.email),
                    "password": String(req.query.password),
                }
                var token = jwt.sign({
                    header,
                    payload
                }, secret);
                res.redirect('/validate/?check=' + token);
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
        var cipher = req.query.check;
        console.log(cipher);
        try {
            var credentials = jwt.verify(cipher, secret);
            console.log(credentials);
        } catch (err) {
            console.log(err);
        }
        res.render('home', {
            email: decoded.payload.email,
            layout: 'dashboard'
        });
    });
}
