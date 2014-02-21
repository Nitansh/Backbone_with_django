define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		FooterModel = Backbone.Model.extend({
 		
 		url : '/Footer_api/?format=json'

		});

		return FooterModel;


});