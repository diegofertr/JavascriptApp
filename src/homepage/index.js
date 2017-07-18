var page = require('page');
var empty = require('empty-element');
var template = require('./template-home');
var title = require('title');
// var request = require('superagent');
var header = require('../header');
var axios = require('axios');
var webcam = require('webcamjs');

//ruta home
page('/', header, loading, loadPicturesAxios, function(ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');
	
	empty(main).appendChild(template(ctx.pictures));

	$(`#modalCamara`).modal({
		ready: function () {
			Webcam.attach('#camara-input');
		},
		complete: function () {
			Webcam.reset();
		}
	});
})

//function for make the loader 
function loading(ctx, next) {
	var el = document.createElement('div');
	el.classList.add('loader');
	document.getElementById('main-container').appendChild(el);
	next();
}

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