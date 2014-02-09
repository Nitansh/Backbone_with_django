define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/customer_template.html',
		 'libs/pubSub',
		 'collections/CustomerCollection'
		 ], function(
		 	Backbone,
		 	$, 
		 	_,
		 	myTemplate,
		 	PubSub,
		 	CustomerCollection
		 	){
			var CustomerView = Backbone.View.extend({
				el : '.Body',

				Collection : new CustomerCollection,

				template : _.template(myTemplate),
			
				initialize : function(){
					_.bindAll(this,"remove","success","error","render");
					PubSub.on('remove:customerView',this.remove);
					var _this =  this;
					this.Collection.fetch({success : _this.success, erorr : _this.error});
				},
				

				success : function(c, r, options){
					this.render();
				},

				error : function(c, r, options){
					console.log('errorin feteching customer model')
				},

				render: function(){
					var _this = this;
					var _data = {person : _this.Collection.models}
					$(this.el).html(this.template(_data));
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
