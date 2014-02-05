define(
	[
		'backbone',
		'libs/pubSub'
	],
	function
	(
		Backbone,
		PubSub
	){

	"use strict"; 

	var UserAuthorizedRouter = Backbone.Router.extend({
	
		routes : {
			'generalInformation'  : "generalinfo"
		},
		

	});


	return UserAuthorizedRouter;
});