
var http = require('http');

// STEP #2 Let's print the request object:
var bunnyServer = http.createServer();
bunnyServer.on('request', function(req, res) {
  // res.writeHead(200);
  // res.end('<html><body><h1>Bunny Server is live!</h1><img src="https://cdn.meme.am/instances/400x/55347780.jpg"></body></html>')
	
  // printing the request object!
  // console.log(req);

  if (req.url === '/') {
  	console.log("setting custome headers");
	  res.setHeader('Content-Type', 'text/html');
	  res.setHeader('BrigadierFluffykins', 'isAwesome');
	  res.setHeader('BunnyBunny', 'OhYeah');
	  res.end('<html><body><h1>Bunny Server retrieved the Homepage!</h1><img src="http://weknowmemes.com/wp-content/uploads/2013/03/easter-bunny-meme-eggs.jpg"></body></html>')
	}

  console.log('url: ' + req.url); 
  console.log('method: ' + req.method);

  console.log(req.headers);
  // lets access the 'connection' property inside the headers object:
  console.log("ACCESSING HEADER:", req.headers['connection']);




}).listen(3000);