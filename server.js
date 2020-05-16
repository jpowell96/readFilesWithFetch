const http = require('http');
const fs = require('fs');


http.createServer(function(request, response) {
	const url = request.url;
	if (url === "/") {
	fs.readFile("index.html", function(err, data) {
		if (err) {
			response.writeHead(404);
			response.write("Not Found!")
		} else {
			response.writeHead(200, {'Content-Type' : "text/html"});
			response.write(data);
		}

		response.end();

	});
	} else if (url.startsWith("/example")) {
		const fileToRead =  url.slice(1, url.length);
		fs.readFile(fileToRead, function(err, data) {
		if (err) {
			response.writeHead(404);
			response.write("Not Found!")
		} else {
			response.writeHead(200, {'Content-Type' : "text/html"});
			response.write(data);
		}

		response.end();

		});
	}

}).listen(3000);
console.log("Listening on port 3000...");