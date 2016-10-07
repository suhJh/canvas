const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

//  172.20.100.125

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

app.use(express.static(path.join(__dirname, '/public/dist/js')));
app.use(express.static(path.join(__dirname, '/public/dist/img')));
app.use(express.static(path.join(__dirname, '/public/dist/css')));
app.use(express.static(path.join(__dirname, '/public/dist/bower')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/dist/index.html'));
});
app.listen(port, () => {
  console.log('Express is listening on port', port);
});
