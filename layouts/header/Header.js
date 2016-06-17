/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/Evented',
    'dojo/topic',
    'dojo/text!./template/header.html'
],function(declare,_WidgetBase,_TemplatedMixin,on,lang,Evented,topic,template){
return declare('layouts.header.Header',[_WidgetBase,_TemplatedMixin,Evented],{
    templateString:template,
    postCreate:function(){
        this.inherited(arguments);
        var str;
        on(this._hotels,'click',lang.hitch(this,function(e){
            //e.preventDefault();
            topic.publish("navChange", 'hotels');
        }));
      }
});
});
