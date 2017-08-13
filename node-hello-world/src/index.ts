import express = require('express');
let app = express();

// POST support
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (request, response) => {
  response.send('hello world');
});

app.post('/api/sayhello', upload.array(), (request, response) => {
  let name = request.body.name;

  if (!isNaN(name)) {
    response
      .status(400)
      .send('No string as a name');
  } else {
    console.log('Hello, ' + name);
  }

  response.send('POST request to homepage');
});

app.listen(3000);
console.log('listening on port 3000');
