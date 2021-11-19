var express = require('express');
var app = express();

//Routh to handle any request; also calls next
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path: ' + request.path);
    next();
});

//Route to handle just the path/test
app.get('/test', function (request, response, next) {
    response.send('Got a GET request to path:');
});

//Handle request for any static file
app.use(express.static('./public'));

app.listen(8080, () => console.log(`listening on port 8080`)); //note the use of an anonymous function here

//Rule to handle process_form request from order_page.html
app.post("/process_form", function (request, response, next) {
    response.send('Got a GET request to path: test');
});

app.usemyParser.urlencoded({ extended: true }));

//Rule to handle process_form request from order_page.html
app.post("/process_form", function (request, response) {
    let POST = request.body;

    if (typeof POST['quantity_textbox'] != 'undefined')
    {
        let quantity = POST['quantity_textbox'];
        if (isNonNegativeInteger(quantity)) {
            response.send(`<H1>Thank you for ordering ${quantity} things!</H1>`);
        } else {
            response.send(`<I>${quantity} is not a valid qunatity!</I>`);
        }
    }
});

//Handle request for any static file
app.use(express.static('./public'));

app.listen(8080, () => console.log(`listening on port 8080`));