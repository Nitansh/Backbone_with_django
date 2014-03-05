define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		DashboardModel = Backbone.Model.extend({
 		
 		url : '/static/data/Dashboard.json'

		});

		return DashboardModel;


});