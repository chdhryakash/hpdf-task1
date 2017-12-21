const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const request = require("request");
const exphbs  = require('express-handlebars');

const app = express();
const port = 8000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req,res) => {
  res.send('Hello World - Akash');
});

app.get('/authors', (req, res) => {
  request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
  	if(!error && response.statusCode === 200) {
				var data1 = JSON.parse(body);
		  request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
		  	if(!error && response.statusCode === 200) {
					var data2 = JSON.parse(body);
					var s = new String();
					for(var i = 0; i < data1.length; i++) {
						var count = 0;
						for(var j = 0; j < data2.length; j++) {
							if(data2[j].userId === data1[i].id) {
								count++;
							}
						}
						s = s + data1[i].name + count;
					}
					res.render('authors', {s});
		  	}
		  });
  	}
  });
});


app.get('/setcookie', (req,res) => {
  res.cookie('name','Akash');
  res.cookie('age','20');
  res.end('<p><a href="/getcookies"> click here </a> </p>');
});

app.get('/getcookies', function(req,res){
  var cookie = req.cookies;
  res.send(cookie);
  });

app.get('/robots.txt', (req,res) => {
  res.sendFile('robots.txt', {root: path.join(__dirname, './')});
});

app.get('/image', (req,res) => {
  res.sendFile('img.jpg', {root: path.join(__dirname, './')});
});

app.get('/input', (req,res) => {
  res.sendFile('input.html', {root: path.join(__dirname, './')});
});

app.post('/show', urlencodedParser, (req,res) => {
  res.send(req.body);
});

app.listen(port, (res,req) => {
  console.log('Server started on ' + port);
});