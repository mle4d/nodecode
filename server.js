var http = require("http");
var url = require("url");

function start() {
function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + recieved.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello world");
    response.end();
}
http.createServer(onRequest).listen(8888);

console.log("server has started.");
}
exports.start = start;