// import yo from 'yo-yo'
// import layout from '../layout'
// import translate from '../translate'
var yo = require('yo-yo');
var layout = require('../layout');
var translate = require('../translate');

module.exports = function userPageTemplate(user) {
	var el = yo`<div class="container user-page">
	<div class="row">
		<div class="col s12 m10 offset-m1 l12 center-align heading">
			<div class="row">
				<div class="col s12 m10 offset-m1 l3 offest-l3 center">
					<img src="${user.avatar}" class="responsive-img circle" />
				</div>
				<div class="col s12 m10 offset-m1 l9 center">
					<h2 class="hide-on-large-only center-align">${user.username}</h2>
					<h2 class="hide-on-med-and-down left-align">${user.username}</h2>
				</div>
			</div>
		</div>
		<div class="row">
					${user.pictures.map(function (picture) {
						return yo`
						<div class="col s6 m12 l4">
						<div class="picture-container">
						<img src="${picture.src}" class="picture" />
						<div class="likes">
						<i class="fa fa-heart"></i> ${picture.likes}
						</div>
						</div>
						</div>
						`
					})}
		</div>
	</div>
</div>`

	return layout(el)
}