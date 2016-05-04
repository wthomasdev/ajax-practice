$(document).ready(function(){

  alert("i'm working baby");

  $.get("http://www.omdbapi.com/?t=scarface", function(data) {
    console.log(data);

    var title = data.Title;
    var actors = data.Actors;
    var awards = data.Awards;
    var poster = data.Poster;


    $('div').append("<h1>" + title + "</h1>");

    $('div').append("<br><br>");

    $('div').append("<h2>" + actors + "</h2>");

    $('div').append("<br><br>");

    $('div').append("<h3>" + awards + "</h3>");

    $('div').append("<br><br>");

    $('div').append('<img src="' + poster + '">"');


})


});
