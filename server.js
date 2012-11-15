//var async = require("async");

//var databaseUrl = "test"; // "username:password@example.com/mydb"
//var collections = ["users", "reports"];
//var db = require("mongojs").connect(databaseUrl); //, collections);
var http = require('http');

coll = [];
var d = new Date();

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        var dt = chunk.toString('utf-8');

        if( dt == '' )
            return;

    });

    req.on('end', function() {
        // empty 200 OK response for now
        res.writeHead(200, "OK", {'Content-Type': 'text/html'});
	res.write( '{ "nodes_up" : 10, "nodes_total" : 15  }'  );
        res.end();
    });
}).listen(6969, '0.0.0.0');

console.log('Server running at http://*:6969/');

