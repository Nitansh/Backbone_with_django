define([
    'backbone'
], function (
    Backbone
) {

    var DashboardModel = Backbone.Model.extend({

        url: '/static/data/Dashboard.json'

    });

    return DashboardModel;


});