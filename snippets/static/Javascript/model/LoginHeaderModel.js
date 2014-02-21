define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		LoginHeaderModel = Backbone.Model.extend({
 		
 		url : '/header_api/?format=json'

		});

		return LoginHeaderModel;


});