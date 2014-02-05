define(function(
			require
		){

		"use strict";

		function userAuthorizedApp(){
			var UserAuthorizedRouter = require('router/UserAuthorizedRouter');
			var PubSub               = require('libs/pubSub');
			var self  =  this;
			this.userAuthorizedRouter =  new UserAuthorizedRouter();
			PubSub.listenTo(self.userAuthorizedRouter, 'route:generalinfo', self.stateGeneralInfo);
		}

		userAuthorizedApp.prototype.stateGeneralInfo =  function(){
			var PubSub     = require('libs/pubSub');
			PubSub.trigger('remove:bodyView','old body view deleted');  
			PubSub.trigger('remove:customerView','old customer information view deleted'); 

			var GeneralInformationView = require('views/generalInformation-view');	
            var generalInformationView = new GeneralInformationView();
		}


		return userAuthorizedApp;

});