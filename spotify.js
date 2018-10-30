require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

var fn_spotify = function(argument) {
  spotify.search({ type: "track", query: argument, limit: 15 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    var songs = data.tracks.items;

    for (let i = 0; i < songs.length; i++) {
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      // console.log(songs[i]);
      // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
      console.log("Search Result NO.%i", i + 1);
      let a = "";
      let album = "";
      let link = songs[i].preview_url;
      songs[i].artists.forEach(function(elem) {
        a += elem.name + ",";
        let b = songs[i].album.album_type;
        if (b === "single") {
          album = "Release type: Single";
        } else {
          album = "Album Name: " + songs[i].album.name;
        }
      });
      console.log("Artist Name: " + a.substring(0, a.length - 1));
      console.log("Song's Name: " + songs[i].name);
      console.log(album);
      console.log("Preview Link: " + link);
      console.log("««««««««««««««««««««««««««««««««««««««««««««");
    }
  });
};
module.exports = fn_spotify;
