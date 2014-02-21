define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		BodyModel = Backbone.Model.extend({
 		
 		url : '/static/data/body.json'

		});

		return BodyModel;


});