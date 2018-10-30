var request = require("request");
var moment = require("moment");
var concert = function(arg) {
  request(
    "https://rest.bandsintown.com/artists/" +
      arg +
      "/events?app_id=codingbootcamp",
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // console.log(JSON.parse(body));
        // console.log(typeof body);
        let a = JSON.parse(body);
        // console.log(body.venue);
        a.forEach(function(elem) {
          let t = elem.datetime.split("T");
          let mt = moment(t[0], "YYYY-MM-DD").format("MM-DD-YYYY");
          console.log(
            "%s will have a concert in %s,located in %s,%s at %s.\n",
            arg,
            elem.venue.name,
            elem.venue.city,
            elem.venue.country,
            mt
          );
        });
      }
    }
  );
};
module.exports = concert;
