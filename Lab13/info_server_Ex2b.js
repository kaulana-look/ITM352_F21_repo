var express = require("express");
var app = express();

app.all('*', function (request, response, next) {
    request.send(request.method + ' to path: ' + request.path);
    next();
});

// Route to handle just the path /test
app.get('/test', function (request, response, next) {
    response.send('Got a GET request to path: test');
});

app.listen(8080, () => console.log(`listening on port 8080`));