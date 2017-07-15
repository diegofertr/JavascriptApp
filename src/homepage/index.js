var page = require('page');
var empty = require('empty-element');
var template = require('./template-home');
var title = require('title');
var request = require('superagent');
var header = require('../header');

//ruta home
page('/', header, loadPictures, function(ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');
	
	empty(main).appendChild(template(ctx.pictures));
})

//loading pictures from server
function loadPictures(ctx, next) {
	request
		.get('/api/pictures')
		.end(function (err, res) {
			if (err) return console.log(err);
			console.log(res.body);
			ctx.pictures = res.body;
			next();
		})
}