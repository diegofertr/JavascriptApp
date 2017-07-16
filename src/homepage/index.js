var page = require('page');
var empty = require('empty-element');
var template = require('./template-home');
var title = require('title');
// var request = require('superagent');
var header = require('../header');
var axios = require('axios');

//ruta home
page('/', header, loadPicturesAxios, function(ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');
	
	empty(main).appendChild(template(ctx.pictures));
})

//loading pictures from server with superagent library
// function loadPictures(ctx, next) {
// 	request
// 		.get('/api/pictures')
// 		.end(function (err, res) {
// 			if (err) return console.log(err);
// 			console.log(res.body);
// 			ctx.pictures = res.body;
// 			next();
// 		})
// }

//loading pictures from server with axios library & promises
function loadPicturesAxios(ctx, next) {
	axios
		.get('/api/pictures')
		.then(function (res) {
			ctx.pictures = res.data;
			next();
		})
		.catch(function(err) {
			console.log(err);
		})
}