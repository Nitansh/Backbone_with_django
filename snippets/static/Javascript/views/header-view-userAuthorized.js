define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/header_template_userAuthorized.html',
		 'libs/pubSub',
		 'model/HeaderModel'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	HeaderModel
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.Header',

				template : _.template(myTemplate),

				model    : new HeaderModel, 

				events : {
					'click .tabs' :  'setActiveClass'
				},
				
				initialize : function(){
					_.bindAll(this,"remove","success","error","render");
					var _this = this;
					this.model.fetch({success : _this.success , error : _this.error });
					PubSub.on('remove:headerViewUserAuthorized',this.remove);
				},

				success : function(model, response, options){
					this.render();
					console.log('model fetched succcesfully');
				},

				error : function(error, response, options){
					console.log('error occured in fetching the header model' + response.responseText);
				},

				render: function(){
					var _data = {data : this.model.toJSON()} 
					$(this.el).html(this.template(_data));
				},

				setActiveClass : function (event){
					this.$('.tabs').removeClass('active');
					this.$(event.target).parent().addClass('active');
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