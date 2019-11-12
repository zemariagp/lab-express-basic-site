const express = require('express');
const app = express();
const port = 3000;
path = __dirname;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path + "/views/index.html");
})
app.get('/about', function (req, res) {
  res.sendFile(path + "/views/about.html");
})
app.get('/works', function (req, res) {
  res.sendFile(path + "/views/works.html");
})
app.get('/gallery', function (req, res) {
  res.sendFile(path + "/views/gallery.html");
})
app.get('/error', function (req, res) {
  res.sendStatus(404);
  res.sendFile(path + "/views/error.html");
})
app.listen(port);