console.log("officially working");




$(document).ready(function() {

    $("#submit").click(function() {
        console.log("in click");

        var city_name = $('#search-city').val();


        var api_request = "http://api.pexels.com/v1/search?query=" + city_name +  " skyline";
        console.log(api_request);
        $.ajax({

            headers: {
             "Authorization": "563492ad6f917000010000016b4d0415727749ef5739200c48a95fed"
            },

            // The URL for the request
            url: api_request,

            // The data to send (will be converted to a query string)
            data: {
                id: 123
            },

            // Whether this is a POST or GET request
            type: "GET",

            // The type of data we expect back
            dataType : "json",
        })
          // Code to run if the request succeeds (is done);
          // The response is passed to the function
          .done(function( json ) {
            console.log(json);
            var url = json.photos[0].src.landscape;
            $("#flickr-bg").css("background-size", "contain");
            $("h3").css("color","white");
            $("#flickr-bg").css("background-image", "url("+ url + ")");
            console.log(url);
    });
  });

    });
