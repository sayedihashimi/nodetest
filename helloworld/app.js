var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello world!');
});

app.post('/',function(req,res){
  res.send('POST on /');
});

app.post('/user',function(req,res){
  res.send('POST on /user');
});

app.put('/user',function(req,res){
  res.send('PUT on /user');
});

var server = app.listen(3001,function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening on http://%s:%s',host,port);
});

