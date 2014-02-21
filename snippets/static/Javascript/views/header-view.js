define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/header_template.html',
		 'libs/pubSub',
		 'model/LoginHeaderModel'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	LoginHeaderModel
		 	){

			var HeaderView = Backbone.View.extend({
				el : '.Header',

				template : _.template(myTemplate),

				model    : new LoginHeaderModel,
				events:{
					'click li#RTL':'RTL_conversion',
					'click li#LTR' : 'LTR_conversion'
				},

				RTL_conversion:function() {
					var bootstrap_link =$("#bootstrap"); 
					bootstrap_link.attr({href : "/static/css/bootstrap.rtl.css"});
				},
				LTR_conversion:function() {
					var bootstrap_link =$("#bootstrap");
					bootstrap_link.attr({href : "/static/css/bootstrap.min.css"});
				},

				initialize : function(){
					var _this = this;
					_.bindAll(this,"remove","success","render","error");
					this.model.fetch({success : _this.success , error : _this.error });
					
					PubSub.on('remove:headerView',this.remove);
				},

				success : function(model, response, options){
					this.render();
					console.log('model fetched succcesfully');
				},

				error : function(model, response, options){
					console.log('error occured in fetching the header model' + response.responseText);
					alert(error);
				},

				render: function(){
					var _data = {data : this.model.toJSON()}
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
			return HeaderView;
});