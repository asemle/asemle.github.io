require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/contact', function (req, res) {
  console.log(req.body.message)
  const msg = {
    to: process.env.workemail,
    from: req.body.email,
    subject: req.body.name + 'contacted you from asemle.site!',
    html: '<p>' + req.body.message + '</p> <br>' + '<b>' + req.body.email + '</b> <br> <b>' + req.body.phone + '</b>',
  };
  sgMail.send(msg, (error, result) => {
    if (error) {
      console.log(error);
      res.send(console.log(error));
    }
    else {
      console.log('Message sent:' + result)
      res.send(true)
    }
  });
 });

module.exports = app;
app.listen(port, function() {
  console.log("Started server on port", port);
});
