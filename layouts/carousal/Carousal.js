/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/query',
    'dojo/text!./template/carousal.html'
],function(declare, _WidgetBase, _TemplatedMixin, query, template){
    return declare('layouts.carousal.Carousal',[_WidgetBase,_TemplatedMixin],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            //query('.carousel').carousel();
        }
    });
});