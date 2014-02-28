define([
    'backbone'
], function (
    Backbone
) {

    var RatingPlanModel = Backbone.Model.extend({

        url: '/static/data/Rating_Plan.json'

    });

    return RatingPlanModel;


});