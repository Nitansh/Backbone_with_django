define([
		'backbone',
		 'jquery',
		 'underscore',
		 'text!/static/templates/body_template.html',
		 'libs/pubSub'
		 ], function(
		 	Backbone,
		 	$,
		 	_,
		 	myTemplate,
		 	PubSub
		 	){

			var BodyView = Backbone.View.extend({
				el : '.Body',

				template : _.template(myTemplate),
				
				initialize : function(){
					this.render();
					_.bindAll(this,"navigateToLogin","remove");
					PubSub.on('remove:bodyView',this.remove);
				},
				events:{
                	'click button#login':'validate',
               		'click button#reset':'resetField'
           		},

            	validate:function(){
                	if($('#UserName').val()==null || $('#UserName').val()=="" ) {
                		alert("user name is empty");
                	}else if($('#Password').val()==null || $('#Password').val()=="" ) {
                		alert("Password is empty");
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

           		resetField:function(){
           			$('#UserName').val(null);
           			$('#Password').val(null);
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
			return BodyView;
});
