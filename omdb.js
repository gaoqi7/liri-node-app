var request = require("request");
var fn_movie = function(argument) {
  request(
    `http://www.omdbapi.com/?t=${argument}&y=&plot=short&apikey=trilogy`,
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("<<<<< MOVIE >>>>>");
        console.log("Title of the movie is: " + JSON.parse(body).Title);
        console.log("Year the movie came out: " + JSON.parse(body).Year);
        console.log("IMDB Rating is: " + JSON.parse(body).imdbRating);
        console.log(
          "Rotten Tomatoes Rating is: " +
            JSON.parse(body).Ratings[1].Value[0] +
            "." +
            JSON.parse(body).Ratings[1].Value[1]
        );
        console.log(
          "Country where the movie was produced: " + JSON.parse(body).Country
        );
        console.log("Language of the movie is: " + JSON.parse(body).Language);
        console.log("Plot of the movie is: " + JSON.parse(body).Plot);
        console.log("Actors in the movie is: " + JSON.parse(body).Actors);
        console.log("<<<<< MOVIE END>>>>>");
      }
    }
  );
};
module.exports = fn_movie;
