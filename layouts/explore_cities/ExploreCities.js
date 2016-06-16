/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/exploreCities.html',
    'dojo/on',
    'dojo/dom-attr',
    'dojo/_base/lang',

    'services/serviceWrapper'
],function(declare, _WidgetBase, _TemplatedMixin, template, on, domAttr, lang, serviceWrapper){
    return declare('layouts.explore_cities.ExploreCities',[_WidgetBase,_TemplatedMixin],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            var _self=this;
            var cities = [ {attachPoint: 'bhubaneswar', value:'bbsr'},{attachPoint: 'puri', value:'puri'},
                                {attachPoint: 'gopalpur', value:'gopalpur'}, {attachPoint: 'konark', value:'konark'}];
            for(var i= 0; i< cities.length; i++){
                var attachPoint= cities[i].attachPoint;
                on(_self[attachPoint], 'click', lang.hitch(_self,_self._clickHandler,cities[i].value));

            }
        },
        _clickHandler:function(city){
            var self = this;
            serviceWrapper.rtrvHotelsByCitydetail().then(function (rtrvHotelResponseData) {
                console.log(rtrvHotelResponseData.success);
                //self.set('hotel', rtrvHotelResponseData);
            });

        }

    });
});
