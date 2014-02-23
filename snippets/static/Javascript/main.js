require.config({
		    baseUrl: "/static/Javascript",
		    paths: {
		        "jquery"     : "libs/jquery",
		        "backbone"   : "libs/backbone",
		        "underscore" : "libs/underscore",
		        "bootstrap"  : "libs/bootstrap",
		        "pubSub"	 : "libs/pubSub",
		        "polyglot"   : "libs/polyglot",
		        "flip"	     : "libs/flip"
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
		     	},
		     	'polyglot':
		     	{
		     		exports: 'Polyglot'
		     	},
		     	'flip' : {
		     		deps : ['jquery'],
		     		exports : 'Flip'
		     	}
		    }
		});


require(
	[
	'apps/BaseApp',
	'bootstrap',
	'polyglot',
	'jquery'
	],
	function(
		BaseApp,
		Bootstrap,
		Polyglot,
		$
		){		
		"use strict";

		loadCss('/static/css/bootstrap.min.css', 'bootstrap');	
		loadCss('/static/css/responsive/responsive.css', 'responsive');


		var _locale="";
		if(navigator.language==="en-US"){
			_locale = 'en';
		}
		else if(navigator.language==="de"){
			_locale= 'de';
		}
  			
  		
  		$.getJSON('/static/locales/' + _locale + '.json', function(data) {
  			window.polyglot = new Polyglot({phrases: data});
  		}).done(function(){
  			var baseApp = new BaseApp();	
			Backbone.history.start();
			return baseApp;
		});	
  	});