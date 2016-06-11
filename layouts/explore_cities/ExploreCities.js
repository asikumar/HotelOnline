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
    'dojo/Evented'
],function(declare,_WidgetBase,_TemplatedMixin,template,on,domAttr,Evented){
    return declare('layouts.explore_cities.ExploreCities',[_WidgetBase,_TemplatedMixin,Evented],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            var _self=this;
                    },
        _clickHandler:function(e){
            var _attachpoint1=domAttr.get(e.target.parentNode,"data-dojo-attach-point"),_attachpoint2=domAttr.get(e.target.parentNode.parentNode,"data-dojo-attach-point");
            var _node=_attachpoint1?_attachpoint1:_attachpoint2;
            if(_node){
                this.emit("citySelected",_node);
            }else{
                this.emit("citySelected",domAttr.get(e.target.parentNode.parentNode.parentNode,"data-dojo-attach-point"));
            }

        }
    });
});
