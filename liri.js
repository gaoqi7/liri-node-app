var fs = require("fs");
var request = require("request");
var OMDB = require("./omdb");
var CONCERT = require("./concert.js");
var SPOTIFY = require("./spotify.js");
var command = process.argv[2];
var argument = process.argv.slice(3).join(" ");
function liri(command, argument) {
  if (command === "spotify-this-song") {
    if (argument) {
      SPOTIFY(argument);
    } else {
      console.log("Artist Name: Ace of Base");
      console.log("Song's Name: The Sign");
      console.log("Album Name: Happy Nation");
      console.log(
        "Preview Link: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=db7191d270b3463b8acc7db0e4dc3786"
      );
    }
  } else if (command === "movie-this") {
    if (argument) {
      OMDB(argument);
    } else {
      OMDB("mr nobody");
    }
  } else if (command === "concert-this") {
    CONCERT(argument);
  }
}
liri(command, argument);
if (command === "do-what-it-says") {
  fs.readFile("./random.txt", "utf8", function(err, data) {
    if (err) throw err;
    let a = data.split(",");
    console.log(a);
    command = a[0].trim();
    argument = a[1].substring(1, a[1].length - 1);
    liri(command, argument);
  });
}
