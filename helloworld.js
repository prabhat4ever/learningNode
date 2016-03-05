// load http module
var http = require('http');

// create http server

http.createServer(function(req, res){
	// content header
	res.writeHead(200, {'content-type': 'text/plain'});

	// write message and signal communication is complete
	res.end("Hello, world!\n");
}).listen(8124);

console.log('Server running on 8124/');
// Note: - The listen method is aynchronous.