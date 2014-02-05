require.config({
		    baseUrl: "/static/Javascript",
		    paths: {
		        "jquery"     : "libs/jquery",
		        "backbone"   : "libs/backbone",
		        "underscore" : "libs/underscore",
		        "bootstrap"  : "libs/bootstrap",
		        "pubSub"	 : "libs/pubSub"	
 		    },
		    shim: {
		        'backbone': {
		            deps: ['underscore', 'jquery'],
		            exports: 'Backbone'
		        },
		        'underscore': {
		            exports: '_'
		     	},
		     	bootstrap:
		     	{
		     		deps: ['jquery'],
		     		exports : 'Bootstrap'
		     	}
		    }
		});


require(
	[
	'apps/BaseApp',
	'bootstrap'
	],
	function(
		BaseApp,
		Bootstrap
		){		
		"use strict";

			
		var baseApp = new BaseApp();	
		Backbone.history.start();
		
		return baseApp;
});