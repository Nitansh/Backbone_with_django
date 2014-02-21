define(function(
			require
		){
	
			"use strict";

			function BaseApp (){
					
				var BaseRouter = require('router/baseRouter');
				var PubSub     = require('libs/pubSub');
				var self  =  this;
				this.baseRouter =  new BaseRouter();
				PubSub.listenTo(self.baseRouter, 'route:init', self.StateLogin);
				PubSub.listenTo(self.baseRouter, 'route:userLoggedIn', self.UserAuthorized);					
			};

			BaseApp.prototype.UserAuthorized= function(){
				
				require(['views/customer-view','libs/pubSub','views/header-view-userAuthorized','apps/UserAuthorizedApp'], function(CustomerView, PubSub, HeaderUserAuthorized, UserAuthorizedApp){
					PubSub.trigger('remove:bodyView','old body view deleted'); 
					PubSub.trigger('remove:headerView','old header view deleted'); 
					PubSub.trigger('remove:generalInformationView','old general information view deleted');
					
					var customerView = new CustomerView();
					var headerUserAuthorized =  new HeaderUserAuthorized();
               		var userAuthorizedApp = new UserAuthorizedApp();
				});
			};

			BaseApp.prototype.StateLogin =  function(msg){
				
				require(['views/header-view','libs/pubSub','views/footer-view','views/body-view'], function(HeaderView, PubSub, FooterView, BodyView){
					PubSub.trigger('remove:customerView','customer body view deleted'); 
					PubSub.trigger('remove:headerViewUserAuthorized','old header view deleted'); 
					PubSub.trigger('remove:generalInformationView','old general information view deleted');
					var headerView   = new HeaderView();
					var footerView   = new FooterView();
					var bodyView     = new BodyView();
				});


			};

			return BaseApp;
});