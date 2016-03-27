var express = require('express');
var resume = require('./resume.js');
var app = express();

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
}, express.static('./public'));

app.get('/resume', function (req, res, next) {
  console.log(resume);
  res.send(resume);
  res.end();
});
var port = process.env.PORT || 3000;

app.listen(port);
console.log('server running at ', port);
