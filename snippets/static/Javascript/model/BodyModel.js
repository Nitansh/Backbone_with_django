define([
    'backbone'
], function (
    Backbone
) {

    var BodyModel = Backbone.Model.extend({

        url: '/static/data/body.json'

    });

    return BodyModel;


});