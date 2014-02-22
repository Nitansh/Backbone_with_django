({
    baseUrl: "../Javascript",
    paths: {
        "jquery"     : "libs/jquery",
        "backbone"   : "libs/backbone",
        "underscore" : "libs/underscore",
        "bootstrap"  : "libs/bootstrap",
        "pubSub"	 : "libs/pubSub",
        "polyglot"   : "libs/polyglot"	
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
		     	}
		    },
    name: "main",
    out: "main-built.js"
})