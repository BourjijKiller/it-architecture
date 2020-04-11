const http = require('http');
var soap = require('soap');
var fs = require('fs');

var mesServices = {
    MyService: {
        MyPort: {
            HelloWorld: function(args) {
                return {
                    name: args.name
                }
            }
        }
    }
};

function runServer() {
    console.log("[Serveur lancé]");
}

var wsdl = fs.readFileSync('config.wsdl', 'utf8');

var server = http.createServer(function(req, res) {
    res.end('Serveur créé : ' + req.url);
});

server.listen(8000);

soap.listen(server, '/wsdl', mesServices, wsdl, runServer);