/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/destinations.html',
    'dojo/dom-construct',
    'dojo/_base/array',
    'dojo/on',
    'dojo/hash',
    'dojo/topic'
],function(declare,_WidgetBase,_TemplatedMixin,template,domConstruct,arrayUtil,on,hash,topic){
    return declare('layouts.explore_destinations.Destinations',[_WidgetBase,_TemplatedMixin],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            var response = this._DestinationPlaces();
            this._createDestination(response);
        },
        _createDestination: function(response){
            var destinations = response ;
            var self = this;
            arrayUtil.forEach(destinations, function(city) {
                var div = domConstruct.create("div", {class: "col-lg-3 col-md-3 pos-rel offer-col"}, self._destinationPlaces);
                var a = domConstruct.create("a",{},div);
                a.href='javascript:void(0)';
                //domConstruct.place(a, div);
                var img = domConstruct.toDom("<img src='images/image1.jpg'>");
                domConstruct.place(img, a);
                var child_div = domConstruct.create("div", {class: "box-caption"}, a);
                var h2 = domConstruct.toDom("<h2>${city.title}</h2>");
                domConstruct.place(h2, child_div);
                on(div, "click" , self._retrieveCityDetails, city.id);
            });
        },
        _DestinationPlaces:function(){
            var cities= [
                {
                    "imagURL": "images/hotel1.jpg",
                    "title": "Bhubaneswar",
                    "id": "bbsr"
                },
                {
                    "imagURL": "images/hotel1.jpg",
                    "title": "Puri",
                    "id": "puri"
                },
                {
                    "imagURL": "images/hotel1.jpg",
                    "title": "Chilika",
                    "id": "chlka"
                },
                {
                    "imagURL": "images/hotel1.jpg",
                    "title": "Gopalpur",
                    "id": "gppur"
                }
            ]
            return cities;
        },
        _retrieveCityDetails: function(id){
            topic.publish('hotel/select', id);
        }
    });
});
