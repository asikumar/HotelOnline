define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./template/HomePage.html',
    'dojo/on',
    'dojo/Evented',
    //Bijits Used in Template
    'layouts/carousal/Carousal',
    'layouts/offers/Offers',
    'layouts/explore_cities/ExploreCities',
    'layouts/explore_destinations/Destinations'
],function(declare,
           _WidgetBase,
           _TemplatedMixin,
           _WidgetsInTemplateMixin,
           template
){
    return declare('layouts.homePage.HomePage',[_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],{
        templateString:template,
        buildRendering: function(){
            this.inherited(arguments);
        },
        postCreate: function(){
            this.inherited(arguments);
        }
    });
});