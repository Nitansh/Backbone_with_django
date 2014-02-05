define([
		'backbone',
		'jquery',
		'underscore'],function(
		Backbone,
		$,
		_
		){
	
		CustomerModel = Backbone.Model.extend({

			urlRoot : 'http://127.0.0.1:8001/snippets',

			url : this.urlRoot + this.id +  '?format=json' 


		});

		return CustomerModel;


});