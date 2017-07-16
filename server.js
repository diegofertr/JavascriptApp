var express = require('express');
var app = express();
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
});

var upload = multer({ storage: storage }).single('picture');

app.set('view engine', 'pug');

//app.use define un middleware
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', { title: 'Platzigram' });
});

app.get('/signup', function(req, res) {
	res.render('index', { title: 'Platzigram - Signup' });
});

app.get('/signin', function(req, res) {
	res.render('index', { title: 'Platzigram - Signin' });
});

//Api routes
app.get('/api/pictures', function(req, res){
	var pictures = [
		{
			user: {
				username: 'diego',
				avatar: 'diego.jpg'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate())
		},
		{
			user: {
				username: 'fernando',
				avatar: 'diego.jpg'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		},
		{
			user: {
				username: 'cristiano',
				avatar: 'diego.jpg'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 20)
		},
	];

	//wait two seconds to send pictures
	setTimeout(function(){
		res.send(pictures);
	}, 2000);

});

app.post('/api/pictures', function(req, res) {
	upload(req, res, function(err) {
		if (err) {
			return res.send(500, "Error uploading file!");
		}
		res.send('Uploaded successfull!');
	})
});

app.listen(3001, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);
	console.log('Servidor Platzigram escuchando en el puerto 3001');
});