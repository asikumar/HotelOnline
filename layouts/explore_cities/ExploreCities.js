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
    'dojo/Evented',
    'dojo/dom-construct',
    'dojo/text!./template/singleCityTempl.html',
    'dojo/_base/lang'
],function(declare,_WidgetBase,_TemplatedMixin,template,on,domAttr,Evented,domConstruct,singleCityTempl,lang){
    return declare('layouts.explore_cities.ExploreCities',[_WidgetBase,_TemplatedMixin,Evented],{
        templateString:template,
        _citiesList:['bhubaneswar','puri'],
        postCreate:function(){
            this.inherited(arguments);
            var _self=this;
            this._createCityView();


                 },
        _createCityView:function(){
            for(var i= 0;i < this._citiesList.length;i++){
                lang.replace(singleCityTempl,this._citiesList);
                domConstruct.place(lang.replace(singleCityTempl,lang.hitch({_cities:this._citiesList},function (_,key){
                    if(key==='cityName')
                    return this._cities[i];
                })),this._cityNode);

            }
        }
    });
});
