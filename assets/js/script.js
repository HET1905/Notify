$(document).ready(function () {
// button functions to add/remove classes with image settings

<<<<<<< HEAD
    // click the button to get the track
    $("#btnGetTracks").on('click', function (e) {
=======
    $("#but1").on("click", function() { 
        $("body").removeClass()
        $("body").addClass("space");
      });

      $("#but2").on("click", function() { 
        $("body").removeClass();
        $("body").addClass("abstract");
      });

      $("#but3").on("click", function() { 
        $("body").removeClass();
        $("body").addClass("beach");
      });

      $("#but4").on("click", function() { 
        $("body").removeClass();
        $("body").addClass("rain");
      });

      $("#but5").on("click", function() { 
        $("body").removeClass();
        $("body").addClass("lounge");
      });

      $("#but6").on("click", function() { 
        $("body").removeClass();
        $("body").addClass("coffee");
      });


    $(function () {
        //animate on scroll
        new WOW().init();
    });

    var trackArtist = $("<h1>");
>>>>>>> master


    $("#btnGetTracks").on('click', function (e) {
        initialWidget();
        var artistName = $("#txtArtistName").val().trim();
        // $("#txtArtistName").val("");
        e.preventDefault();
        // $("#leftDiv").removeClass('col-sm-5');
        // $("#leftDiv").addClass('col-sm-7');
        $("#trackDiv").show();
        resetFields();
        // This will print artist name from textbox and append to musicDiv
<<<<<<< HEAD
        var trackArtist = $("<h1>");
        var artistName = $("#txtArtistName").val().trim();
        // shows the track artist 
=======
        // trackArtist = $("<h1>");
        trackArtist.addClass('artistHeadling');

>>>>>>> master
        trackArtist.text(artistName);
        // $("#txtArtistName").text('');

        $("#trackDiv").append(trackArtist);
        // $("#artistImage").show();

<<<<<<< HEAD
        // ------------------------------
        // This code will load info in artist info section
        var queryUrl = 'https://api.napster.com/v2.2/artists/art.539' + artistInfo + 'nas?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4'
        $ajax({
            url: 'http://api.napster.com/v2.2/artists/nas?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4' + queryUrl,
            method: 'GET',
        }).then(function (response) {
            var artistInfo = art.539;
        console.log(response);

        function displayArtistInfo() { 
        var title = $("<h2>");
        var author = $("<h2>");
        var publishDate = $("<p>");
        var bio = $("<para>");

        var ArtistBackground = $("<h2>").text(response.artist_info + " artist info");
    }
    }));




// --------------------------
// This code will get track from musixmatch api 
var queryUrl =
    'http://api.musixmatch.com/ws/1.1/track.search?q_artist=' + artistName +
    '&page_size=10&page=1&s_track_rating=desc&apikey=71f00284b464247092304a810bf79866'
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/" + queryUrl,
    method: 'GET',
}).then(function (response) {
    var obj = JSON.parse(response);
    console.log(obj);
    // loop to display all tracks of the artist
    for (var i = 0; i < obj.message.body.track_list.length; i++) {
        var iframeTrack = $("<iframe>");

        var trackAlbumName = $("<h2>");
        var trackName = $("<p>");
    // displays the track of the album's name
        trackAlbumName.text("Track Album Name: " + obj.message.body.track_list[i]
            .track
            .album_name);
    // displays the song name
        trackName.text("Track Name: " + obj.message.body.track_list[i].track
            .track_name);

        $("#musicDiv").append(trackAlbumName, trackName);
        // trackArtist
        // This will add anchor tag and trigger click of that tag and display lyric in lyricDiv
        var trackUrl = $("<a>", {
            'id': 'trackUrl',
            'data-trackUrl': obj.message.body.track_list[i].track
                .track_share_url
        }).text("Click Me to play").click(function () {
            var trackDisplayUrl = $(this).attr('data-trackUrl');
            iframeTrack.attr('src', trackDisplayUrl);
            $("#lyricDiv").append(iframeTrack);
        });


        $("#musicDiv").append(trackUrl);


    }
=======
        $("#musicDiv").addClass('borderBottomClass');

        // This Function  will load image in image tag
        displayImageFuncion(artistName);

        // This Function will get track from musixmatch api 
        getTrackFromApi(artistName);

        // This code is for function to get track from musixmatch api 
        function getTrackFromApi(artistName) {
            var queryUrl =
                'http://api.musixmatch.com/ws/1.1/track.search?q_artist=' + artistName +
                '&page_size=10&page=1&s_track_rating=desc&apikey=71f00284b464247092304a810bf79866'
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/" + queryUrl,
                method: 'GET',
            }).then(function (response) {
                var obj = JSON.parse(response);
                console.log(obj);
                
                // loop to display all tracks of the artist
                displayTrackFunction(obj);
                $("#trackDiv").trigger("click");

            });
        }


        function displayImageFuncion(artistName) {
            var imageQueryURL = "https://rest.bandsintown.com/artists/" + artistName +
                "?app_id=70db470b-35d4-4cf4-8624-428f3b573263";
            $.ajax({
                url: imageQueryURL,
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                var artistImage = $("<img>");
                var artistImageUrl = response.thumb_url;
                artistImage.attr('id', 'artistImage');
                artistImage.attr('src', artistImageUrl);
                $("#trackDiv").prepend(artistImage);
            })
        }

        function displayTrackFunction(obj) {

            // used for song widget
            var songArtistName = obj.message.body.track_list[0].track.artist_name;
            
            console.log(songArtistName);

            //used for displaying track
            for (var i = 0; i < obj.message.body.track_list.length; i++) {

                var trackAlbumName = $("<h2>");
                trackAlbumName.addClass('albumNameClass')
                var trackName = $("<p>");
                var trackUrl = $("<a>");

                trackAlbumName.text(i + 1 + ". " + "Album: " + obj.message.body.track_list[i]
                    .track
                    .album_name);
                trackName.text("Track: " + obj.message.body.track_list[i].track
                    .track_name);


                $("#trackDiv").append(trackAlbumName, trackName);

                // This will add anchor tag and trigger click of that  tag and display lyric in lyricDiv

                trackUrl.attr('id', 'trackUrl');
                trackUrl.attr('data-trackUrl', obj.message.body.track_list[i].track
                    .track_share_url)
                trackUrl.attr('data-name', obj.message.body.track_list[i].track
                    .track_name);

                trackUrl.html('<button type="button" class="btn btn-outline-success"><i class="fas fa-play-circle smallPlay"></i> Click Me For Lyrics</button>')
                trackUrl.click(function () {
                    $("#rightDiv").show();
                    // $("#rightDiv").addClass('col-sm-5');
                    $("#lyricDiv").empty();
                    var iframeTrack = $("<iframe>");
                    iframeTrack.attr('id', 'iframeTrack')
                    var trackDisplayUrl = $(this).attr('data-trackUrl');
                    iframeTrack.attr('src', trackDisplayUrl);
                    $("#lyricDiv").append(iframeTrack);

                    //Code for song widget
                    var songName = $(this).attr('data-name');
                    console.log(songName);

                    var songLookUpURL = "https://api.deezer.com/search/track?q=" + songName;
                    $.ajax({
                        url: "https://cors-anywhere.herokuapp.com/" + songLookUpURL,
                        method: "GET"
                    }).then(function (response) {

                        var i = 0;
                        artistMatches = false;

                        while(artistMatches == false){

                            console.log("went into the while loop")
                                if (response.data[i].artist.name == songArtistName) {
                                var songURL = "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=ff0000&layout=dark&size=medium&type=tracks&id=" + response.data[i].id;

                                $(".deezer-widget-player").attr("data-src", songURL);

                                widget();
                                artistMatches = true;
                            }
                            i++;

                            if(i === response.data.length){
                                var songURL = "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=ff0000&layout=dark&size=medium&type=tracks&id=" + response.data[0].id;

        
                                $(".deezer-widget-player").attr("data-src", songURL);
        
                                widget();
                                artistMatches = true;
                            }

                        }

                    });

                });


                $("#trackDiv").append(trackUrl);


            }
        }
        // To clear the input box on get track click
        // $("input:text").val('');
>>>>>>> master

    })

<<<<<<< HEAD
    $("#musicDiv").trigger("click");

});
    })

$("#checkEvent").on('click', function (e) {
    e.preventDefault();
    alert('on check event');

    var artistName = $("#txtArtistName").val().trim();


    $("#artistImage").show();

    var eventQueryURL = "https://rest.bandsintown.com/artists/" + artistName +
        "?app_id=70db470b-35d4-4cf4-8624-428f3b573263";
    $.ajax({
        url: eventQueryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        var artistImage = response.thumb_url;
        $("#artistImage").attr('src', artistImage);

        var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
        var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");
        $("#lyricDiv").prepend(upcomingEvents, goToArtist);
    })
});



}
=======
    function resetFields() {

        $("#trackDiv").empty();
    }


    // ------------Check Event button click-------------

    $("#checkEvent").on('click', function (e) {
        e.preventDefault();
        // alert('on check event');
        $("#lyricDiv").empty();
        var artistName = $("#txtArtistName").val().trim();
        // $("#txtArtistName").val("");



        var eventQueryURL = "https://rest.bandsintown.com/artists/" + artistName +
            "?app_id=70db470b-35d4-4cf4-8624-428f3b573263";
        $.ajax({
            url: eventQueryURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response);

            var eventDiv = $("<div>");

            eventDiv.attr('id', 'eventDiv');

            var artistImageUrl = response.thumb_url;
            var artistImage = $("<img>");
            artistImage.attr('id', 'artistImage');
            artistImage.attr('src', artistImageUrl);

            eventDiv.prepend(artistImage);

            var upcomingEvents = $("<h2>").text("Upcoming events: " + response.upcoming_event_count);
            var goToArtist = $("<a>").text("See Tour Dates");
            goToArtist.attr('id', 'eventCheckDate');
            goToArtist.click(function () {

                $("#lyricDiv").empty();
                var iframeDiv = $("<div>");
                var enventIframe = $("<iframe>");
                enventIframe.attr('src', response.url);
                enventIframe.attr('id', 'eventIFrame');
                iframeDiv.append(enventIframe);

                // eventDiv.append(enventIframe);
                $("#lyricDiv").append(iframeDiv);
                // $(this).fadeTo("fast", .5).removeAttr("src");
            });
            // goToArtist.attr("disabled","disabled");



            eventDiv.append(upcomingEvents, goToArtist);
            $("#lyricDiv").append(eventDiv);
        })
    });



})


// function that needs to be put in order for the song widget to show up
function widget() {
    var w = document[typeof document.getElementsByClassName === 'function' ? 'getElementsByClassName' : 'querySelectorAll']('deezer-widget-player');
    for (var i = 0, l = w.length; i < l; i++) {
        w[i].innerHTML = '';
        var el = document.createElement('iframe');
        el.src = w[i].getAttribute('data-src');
        el.scrolling = w[i].getAttribute('data-scrolling');
        el.frameBorder = w[i].getAttribute('data-frameborder');
        el.setAttribute('frameBorder', w[i].getAttribute('data-frameborder'));
        el.allowTransparency = w[i].getAttribute('data-allowTransparency');
        el.width = w[i].getAttribute('data-width');
        el.height = w[i].getAttribute('data-height');
        w[i].appendChild(el);
    }
};

//initial display of the widget as a play button
function initialWidget() {
    $(".deezer-widget-player").attr('data-src', "");
    $(".deezer-widget-player").html('<i class="fas fa-play-circle"></i>')
    $(".deezer-widget-player").addClass("wow fadeInDown")
    $(".deezer-widget-player").attr("data-wow-duration", "3s");
    $(".deezer-widget-player").attr('data-wow-display', ".2s");
    // widget();
}

// calling initial display of widget
initialWidget();
>>>>>>> master
