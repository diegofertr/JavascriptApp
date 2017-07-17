// import page from 'page'
// import header from '../header'
// import title from 'title'
// import empty from 'empty-element'
// import template from './template-user'
var page = require('page');
var header = require('../header');
var title = require('title');
var empty = require('empty-element');
var template = require('./template-user');
var axios = require('axios');
var request = require('superagent');

page('/:username', header, loadUser, function (ctx, next) {
	var main = document.getElementById('main-container');
	title(`Platzigram - ${ctx.params.username}`);
	empty(main).appendChild(template(ctx.user));
})

function loadUser(ctx, next) {
	axios
		.get(`/api/user/${ctx.params.username}`)
		.then(function (res) {
			ctx.user = res.data;
			next();
		})
		.catch(function(err) {
			console.log(err);
		})
}