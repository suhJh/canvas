var express = require('express');
var app = express();

var port = 8080;

app.use(express.static(__dirname + '/public/dist/js'));
app.use(express.static(__dirname + '/public/dist/img'));
app.use(express.static(__dirname + '/public/dist/css'));
app.use(express.static(__dirname + '/public/dist/bower'));

app.get('*', function(req, res) {
    res.sendFile( __dirname + '/public/dist/index.html');
});
app.listen(port, ()=>{
  console.log('Express is listening on port', port);
});
