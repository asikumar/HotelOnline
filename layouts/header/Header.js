/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/header.html',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/Evented'
],function(declare,_WidgetBase,_TemplatedMixin,template,on,lang,Evented){
return declare('layouts.header.Header',[_WidgetBase,_TemplatedMixin,Evented],{
    templateString:template,
    postCreate:function(){
        this.inherited(arguments);
        on(this.navHeader,'click',lang.hitch(this,function(e){
            this.emit("navChange",e);
        }));
    }
});
});
