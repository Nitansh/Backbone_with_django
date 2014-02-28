define(
    [
        'backbone',
        'libs/pubSub',
        'libs/underscore'
    ],
    function (
        Backbone,
        PubSub,
        _
    ) {

        "use strict";

        var BaseRouter = Backbone.Router.extend({

            initialize: function () {
                _.bindAll(this, "routeChange");
                PubSub.on('userAuthorized', this.routeChange);
            },

            routes: {
                '': "init",
                'ratingPlan': "userLoggedIn"
            },

            routeChange: function () {
                this.navigate("ratingPlan", {
                    trigger: true
                });
            }

        });

        return BaseRouter;
    });