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
					_.bindAll(this,"remove", "success", "render");
					PubSub.on('remove:generalInformationView',this.remove);
					var _this = this;
					$('#body').addclass('Loading');
					this.Collection.fetch({success: _this.success});	
				},
				template : _.template(myTemplate),
			
				render: function(){
					$('#body').removeclass('Loading');
					var _data = {data : this.Collection.models} ; 
					$(this.el).html(this.template(_data));
				},

				success : function(collection, response , options){
						this.render();
						console.log("data fetched successfully" + collection);
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
