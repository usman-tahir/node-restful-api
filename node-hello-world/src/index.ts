import express = require('express');
let app = express();

app.get('/', (request, response) => {
  response.send('hello world');
});

app.listen(3000);
