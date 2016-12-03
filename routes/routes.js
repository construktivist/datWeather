//dependencies
const jwt = require('jsonwebtoken');
const express = require('express');
const path = require('path');

//server secret for user authentication
const secret = require('../public/js/secret');
//list of all current users including email:password
const users = require('../public/js/users');

module.exports = function(app) {
    var api = express.Router();
    var home = express.Router();
    api.use(express.static(path.join(__dirname, '../public')));
    app.use('/api', api);
    app.use('/home', home);
    home.use(express.static(path.join(__dirname, '../dashboard')));

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


    // url: localhost:3000/validate
    app.get('/validate', function(req, res) {
        var cipher = req.query.check;
        try {
            var credentials = jwt.verify(cipher, secret);
            var user_email = credentials.payload.email;
            var user_pass = credentials.payload.password;

            var user_exists = false;
            var user_name = "";
            for (var user in users) {
                var email = users[user].email;
                var pass = users[user].password;
                var email_test_pass = (email === user_email);
                var password_test_pass = (pass === user_pass);
                if ((email_test_pass) && (password_test_pass)) {
                    user_exists = true;
                    user_name = users[user].display_name;
                }
            }
            if (user_exists) {
                res.redirect('/home/?user=' + user_name);
            } else {
                res.render('login', {
                    error: "User/password does not exist. Please create an account."
                });
            }
        } catch (err) {
            res.render('login', {
                error: "Incorrect username/password combination"
            });
        }
    });

    api.get('/', function(req, res) {
        //URL: localhost:3000/api/
        res.json({
            message: 'Welcome to the coolest API on earth!'
        });
    });

    //imitate a ajax request to database by providing "data" via users.js
    api.get('/users', function(req, res) {
        //shows all users
        res.json({
            user_list: users
        });
    });

    api.get('/register', function(req, res) {
        //shows register page
        res.render('register');
    });

    api.post('/register', function(req, res) {
        //where we would insert user into SQL database
        var name = req.body.first_name;
        var last = req.body.last_name;
        var display = req.body.display_name;
        var email = req.body.email;
        var password = req.body.password;
        var confirmation = req.body.password_confirmation;

        if (name && last && display && email && password && confirmation) {
            users.push(req.body);
            res.json(true);
        } else {
            res.json({
                successful: false,
                error: "not all forms were filled in correctly"
            });
        }
    });

    home.get('/', function(req, res) {
        var display_name = req.query.user;
        console.log(display_name + "is the display name");
        res.render('home', {
            name: "Justin",
            layout: "dashboard"
        });
    });
}
