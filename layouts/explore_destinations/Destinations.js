/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/destinations.html'
],function(declare,_WidgetBase,_TemplatedMixin,template){
    return declare('layouts.explore_destinations.Destinations',[_WidgetBase,_TemplatedMixin],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            // this._createDestination(/*resp*/);
        },
        _retrieveCityDetails: function(id){
            topic.publish('hotel/select', id);
        }
    });
});
