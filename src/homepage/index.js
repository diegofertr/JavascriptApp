var page = require('page');
var empty = require('empty-element');
var template = require('./template-home');
var title = require('title');

//ruta home
page('/', function(ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');
	var pictures = [
		{
			user: {
				username: 'diego',
				avatar: 'diego.jpg'
			},
			url: 'office.jpg',
			likes: 1024,
			liked: true
		},
		{
			user: {
				username: 'fernando',
				avatar: 'diego.jpg'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true
		},
		{
			user: {
				username: 'cristiano',
				avatar: 'diego.jpg'
			},
			url: 'office.jpg',
			likes: 24,
			liked: true
		},


	];
	empty(main).appendChild(template(pictures));
})
