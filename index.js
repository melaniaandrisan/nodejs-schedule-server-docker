var schedule = require('node-schedule');
var request = require("request");

var discoverUrl = process.env.PIURL;
var apiUrl = process.env.APIURL;

var j = schedule.scheduleJob('* */1 * * *', function () {
    console.log("API URl: ", apiUrl);
    console.log("Discover URL: ", discoverUrl);

    request({
        url: discoverUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            request({
                url: apiUrl,
                json: true,
                method:'POST',
                body:plug
            }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log("API Response :..." + JSON.stringify(body));
                }
                else {
                    console.log("Error: " + body + error + response);
                }
            })
        }
        else {
            console.log("Error: " + body + error + response);
        }
    })

});
