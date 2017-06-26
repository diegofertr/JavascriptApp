var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template-signup');
var title = require('title');
//ruta signup
page('/signup', function(ctx, next) {
	title('Platzigram - Signup');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})
