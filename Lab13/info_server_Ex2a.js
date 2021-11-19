var express = require('express');
var app = express();

//Route to handle any request

app.all('*', function (request, repsonse, next) {
    request.setEncoding(request.method + ' to path: ' + request.path);
});

app.listen(8080, () => console.log(`listening on poart 8080`)); 