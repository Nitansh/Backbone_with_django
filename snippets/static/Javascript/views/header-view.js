define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/header_template.html',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.Header',

				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
					_.bindAll(this,"remove");
					PubSub.on('remove:headerView',this.remove);

				},

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
			return HeaderView;
});