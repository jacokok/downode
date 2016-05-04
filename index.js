var express = require('express');
var eztv = require('eztv');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', function (req, res) {
  //res.sendFile(__dirname + '/index.html');
  res.render('index', {Title: "Test"});
});

app.get('/test', function (req, res) {
  res.render('test', {name: "jannie"});
  //res.send('test');
});

app.get('/shows', function (req, res) {
  console.log(req.query.show);
  //res.render('shows', {search: req.query.show});
  eztv.getShows({query: req.params.show}, function(err, results) {
  	if(err) res.send(err);
    res.send(results);
  });
});

app.get('/episodes', function(req, res){
  console.log(req.query.show);
  res.send(req.query.show);
  //eztv.getShowEpisodes({showId: req.query.show}, function(error, results) {
  //  if(err) res.send(err);
  //  res.send(results);
  //});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
