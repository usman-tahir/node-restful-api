import express = require('express');
let app = express();

app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/api/sayhello/:name', (request, response) => {
  let name = request.params.name;
  if (!isNaN(name)) {
    response.status(400)
      .send('No string as a name');
  } else {
    response.json({
      "message": name
    });
  }
});

app.get('/api/sayhello/', (request, response) => {
  let name = request.query.name;
  let result = {
    message: name
  }

  if (!isNaN(name)) {
    response.status(400)
      .send('No string as a name');
  } else {
    response.json(result);
  }
});

app.listen(3000);
console.log('listening on port 3000');
