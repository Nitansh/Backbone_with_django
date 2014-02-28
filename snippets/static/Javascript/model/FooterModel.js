define([
    'backbone'
], function (
    Backbone
) {

    var FooterModel = Backbone.Model.extend({

        url: '/Footer_api/?format=json'

    });

    return FooterModel;


});