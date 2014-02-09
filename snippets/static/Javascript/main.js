require.config({
		    baseUrl: "/static/Javascript",
		    paths: {
		    	 /* Load jquery from google cdn. On fail, load local file. */
        		'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min', 'libs/jquery'],
        /* Load bootstrap from cdn. On fail, load local file. */
        		'bootstrap': ['//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min', 'libs/bootstrap'],
		        "backbone"   : ["//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min","libs/backbone"],
		        "underscore" : ["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min","libs/underscore"],
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

		loadCss('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css');	
		loadCss('/static/css/responsive/responsive.css');
		var baseApp = new BaseApp();	
		Backbone.history.start();
		
		return baseApp;
});