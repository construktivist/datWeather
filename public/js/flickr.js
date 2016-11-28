$(document).ready(function() {

    $("#submit").click(function() {

        var city_name = $('#search-city').val();
        var api_request = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0c6224e01aff291651c477a3aaba6a8f&user_id=&text=" + city_name + "+downtown+skyline&per_page=3&format=json&nojsoncallback=1";
        $.ajax({
                // The URL for the request
                url: api_request,

                // The data to send (will be converted to a query string)
                data: {
                    id: 123
                },

                // Whether this is a POST or GET request
                type: "GET",

                // The type of data we expect back
                dataType: "json",
            })
            // Code to run if the request succeeds (is done);
            // The response is passed to the function
            .done(function(json) {

                var url = "https://farm" + json.photos.photo[0].farm + ".staticflickr.com/" + json.photos.photo[0].server + "/" + json.photos.photo[0].id + "_" + json.photos.photo[0].secret + ".jpg";
                //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

                $("#flickr-bg").css("background-size", "cover");
                $("h3").css("color", "white");
                $("h2").css("color", "white");
                $("#flickr-bg").css("background-image", "url(" + url + ")");

            });
    });

});
