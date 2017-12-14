import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../wepack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "John", "lastName": "Ovalle", "email": "johnovalle@gmail.com"},
    {"id": 2, "firstName": "Human", "lastName": "Person", "email": "humanperson@gmail.com"},
    {"id": 3, "firstName": "Robot", "lastName": "Sentinel", "email": "robotsentinel@gmail.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
