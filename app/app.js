var fs = require("fs");
var url = require("url");

function constructResponse(path, response) {
  fs.readFile(path, null, function(error, data){
    if(error) {
      response.writeHead(404, {'Content-type':'text/plain'});
      response.write("File not fund");

    } else {
      response.writeHead(200, {'Content-type':'text/html'});
      response.write(data);
    }
    response.end();
  })
}
module.exports = {
  onRequest: function onRequest(request, response) {
    //response.writeHead(200,{'Content-type':'text/plain'});
    //response.write("Hello World");
      var path = url.parse(request.url).pathname;
      switch(path) {
        case '/':
              constructResponse('./app/index.html', response);
              break;
        case '/index':
              constructResponse('./app/index.html', response);
              break;
        default :
              response.writeHead(404);
              response.write("Nothing found in the path", response);
              response.end();
              break;
      }
  }
}
