define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/generalInformation_template.html',
		 'collections/CustomerCollection',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	CustomerCollection,
		 	PubSub
		 	){
			var GeneralInformationView = Backbone.View.extend({
				el : '.Body',

				Collection : new CustomerCollection,

				initialize : function(){
					_.bindAll(this,"remove","render","success");
					PubSub.on('remove:generalInformationView',this.remove);
					var that = this;
					this.Collection.fetch({success : that.success});	
				},
				template : _.template(myTemplate),
			
				render: function(){
					var that =  this;
					var data = {person : that.Collection.models}
					$(this.el).html(this.template(data));
				},

				success : function(){
					this.render();
				},

				remove: function() {
   					this.$el.empty();
    				this.undelegateEvents();
    				this.stopListening();
    				PubSub.off('remove:bodyView');
    				return this;
				}


			});
			return GeneralInformationView;
});
