var express = require('express');


var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname));

module.exports = app;
app.listen(port, function() {
  console.log("Started server on port", port);
});
