define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/footer_template.html',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub
		 	){

			var FooterView = Backbone.View.extend({
				el : '.Footer',
				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
				},
				
				render: function(){
					$(this.el).html(this.template());
				}
				
			});
			return FooterView;
});