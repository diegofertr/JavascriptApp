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
			likes: 0,
			liked: false,
			createdAt: new Date()
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
	empty(main).appendChild(template(pictures));
})
