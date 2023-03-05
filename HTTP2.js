var http = require("http");
var server = http.createServer(function (request, response) {
    var requestline = request.method + " " + request.url + "HTTP/" + request.httpVersion;
    console.log(requestline);
    response.end();
})
server.listen(5500);