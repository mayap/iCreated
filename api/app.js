const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.listen(port, function () {
  console.log('RESTful API server started on: ' + port);
});
