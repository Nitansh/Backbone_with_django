define([
    'backbone'
], function (
    Backbone
) {

    var HeaderModel = Backbone.Model.extend({

        url: '/header_api/?format=json'

    });

    return HeaderModel;


});