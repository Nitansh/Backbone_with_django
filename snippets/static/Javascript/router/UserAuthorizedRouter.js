define(
    [
        'backbone'
    ],
    function (
        Backbone
    ) {

        "use strict";

        var UserAuthorizedRouter = Backbone.Router.extend({

            routes: {
                'generalInformation': "generalinfo",
                'dashBoard': "dashboard"
            }


        });


        return UserAuthorizedRouter;
    });