define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		CustomerModel = Backbone.Model.extend({

			urlRoot : '/full_api/',

			url : this.urlRoot + this.id +  '/?format=json' 


		});

		return CustomerModel;


});