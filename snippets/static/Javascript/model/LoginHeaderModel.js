define([
    'backbone'
], function (
    Backbone
) {

    var LoginHeaderModel = Backbone.Model.extend({

        url: '/header_api/?format=json'

    });

    return LoginHeaderModel;


});