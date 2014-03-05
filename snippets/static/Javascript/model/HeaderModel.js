define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		HeaderModel = Backbone.Model.extend({
 		
 		url : '/header_api/?format=json'

		});

		return HeaderModel;


});