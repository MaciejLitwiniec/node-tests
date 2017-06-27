const express = require('express');

var app = express();


app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'ToDo App 1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Maciej1',
    age: 33
  }, {
    name: 'Maciej2',
    age: 32
  }, {
    name: 'Maciej3',
    age: 31
  }
  ]);
});

app.listen(3000);

module.exports.app = app;
