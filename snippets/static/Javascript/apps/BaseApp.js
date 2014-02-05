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
				// deleting old view
				var PubSub     = require('libs/pubSub');
				PubSub.trigger('remove:bodyView','old body view deleted'); 
				PubSub.trigger('remove:headerView','old header view deleted'); 
				PubSub.trigger('remove:generalInformationView','old general information view deleted'); 

				var CustomerView = require('views/customer-view');	
                var customerView = new CustomerView();
                var HeaderUserAuthorized = require('views/header-view-userAuthorized');
                var headerUserAuthorized =  new HeaderUserAuthorized();
                var UserAuthorizedApp = require('apps/UserAuthorizedApp');
                var userAuthorizedApp = new UserAuthorizedApp();
			};

			BaseApp.prototype.StateLogin =  function(msg){
				var PubSub     = require('libs/pubSub');
				PubSub.trigger('remove:customerView','customer body view deleted'); 
				PubSub.trigger('remove:headerViewUserAuthorized','old header view deleted'); 
				PubSub.trigger('remove:generalInformationView','old general information view deleted');

				var HeaderView   = require('views/header-view'); 		
				var headerView   = new HeaderView();
				var FooterView   = require('views/footer-view')
				var footerView   = new FooterView();
				var BodyView     = require('views/body-view')
				var bodyView     = new BodyView();

			};

			return BaseApp;
});