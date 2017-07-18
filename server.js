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
				avatar: 'https://pbs.twimg.com/profile_images/886763709103820801/OxPbNNMj_400x400.jpg'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate())
		},
		{
			user: {
				username: 'fernando',
				avatar: 'https://pbs.twimg.com/profile_images/886763709103820801/OxPbNNMj_400x400.jpg'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		},
		{
			user: {
				username: 'cristiano',
				avatar: 'https://pbs.twimg.com/profile_images/886763709103820801/OxPbNNMj_400x400.jpg'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 20)
		},
	];

	// res.send(pictures);
	setTimeout(() => res.send(pictures), 2000);

});

app.post('/api/pictures', function(req, res) {
	upload(req, res, function(err) {
		if (err) {
			return res.send(500, "Error uploading file!");
		}
		res.send('Uploaded successfull!');
	})
});

app.get('/api/user/:username', function(req, res) {
	var user = {
		username: 'diego',
		avatar: 'https://pbs.twimg.com/profile_images/886763709103820801/OxPbNNMj_400x400.jpg',
		pictures: [
			{
				id: 1,
				src: 'https://pbs.twimg.com/media/DE5XYT6V0AAXV_P.jpg:large',
				likes: 3,
			},
			{
				id: 2,
				src: 'https://pbs.twimg.com/media/DE30R5fWAAMxIy9.jpg',
				likes: 10,
			},
			{
				id: 3,
				src: 'https://pbs.twimg.com/media/DE35WfIXsAEr4v6.jpg',
				likes: 24,
			},
			{
				id: 4,
				src: 'https://pbs.twimg.com/media/DE31lA6XgAEF9fG.jpg',
				likes: 0,
			},
			{
				id: 5,
				src: 'https://pbs.twimg.com/media/DE3z2WqXkAA1d7a.jpg',
				likes: 1,
			},
			{
				id: 6,
				src: 'https://pbs.twimg.com/media/DE3uGTSUAAArm0H.jpg',
				likes: 99,
			}
		]
	};
	
	res.send(user);
});

app.get('/:username', function(req, res) {
	res.render('index', { title: `Platzigram - ${req.params.username}`})
});

app.get('/:username/:id', function(req, res) {
	res.render('index', { title: `Platzigram - ${req.params.username}`})
});

// End routes api
app.listen(3001, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);
	console.log('Servidor Platzigram escuchando en el puerto 3001');
});