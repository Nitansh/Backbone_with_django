define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/body_template.html',
		 'libs/pubSub',
		 'model/BodyModel'

		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub,
		 	BodyModel
		 	){

			var BodyView = Backbone.View.extend({
				el : '.Body',

				template : _.template(myTemplate),

				model : new BodyModel,
				
				initialize : function(){
					_.bindAll(this,"navigateToLogin","remove","success","error");
					var _this = this;
					this.model.fetch({success : _this.success , error : _this.error});
					PubSub.on('remove:bodyView',this.remove);
				},

				success : function(collection, response, options){
					console.log("collection data");
					this.render();
				},

				error : function(error){
					console.log('error in fecthing data' +  error);
				},

				events:{
                	'click button#login':'validate'
           		},

            	validate:function(){
                	if($('#UserName').val()==null || $('#UserName').val()=="" ) {
                		$("#alert").append("<div class='alert alert-warning'>Please enter User Name<span class='close' data-dismiss='alert'>&times;</span></div>");
                	}else if($('#Password').val()==null || $('#Password').val()=="" ) {
                		$("#alert1").append("<div class='alert alert-warning'>Please enter Password<span class='close' data-dismiss='alert'>&times;</span></div>");
                	}else if(this.navigateToLogin()){
                		//route will be changed here
                		PubSub.trigger("userAuthorized","UserAuthorized");
                	}else {
                		alert('user name or password is not valid')
                	}
           		},
				
				//user login validation called
    			navigateToLogin: function(){
        			return true; 
    			},

				render: function(){
					var _data = {data : this.model.toJSON()};
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
			return BodyView;
});
