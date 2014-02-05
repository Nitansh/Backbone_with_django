define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/customer_template.html',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub
		 	){
			var CustomerView = Backbone.View.extend({
				el : '.Body',

				initialize : function(){
					this.render();
					_.bindAll(this,"remove");
					PubSub.on('remove:customerView',this.remove);
				},
				template : _.template(myTemplate),
			
				render: function(){
					$(this.el).html(this.template());
				},

				remove: function() {
   					this.$el.empty();
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return CustomerView;
});
