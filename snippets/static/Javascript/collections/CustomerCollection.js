define([
			'backbone',
			'jquery',
			'underscore',
			'model/CustomerModel'
		],
		function(
			Backbone,
			$,
			_,
			Customer
		){

		"use strict";

		var CustomerCollection = Backbone.Collection.extend({

		model : Customer,

		url : "/full_api/?format=json"


		});


		return CustomerCollection;



	



});