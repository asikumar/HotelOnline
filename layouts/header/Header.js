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
    'dojo/text!./template/header.html'
],function(declare,_WidgetBase,_TemplatedMixin,on,lang,Evented,template){
return declare('layouts.header.Header',[_WidgetBase,_TemplatedMixin,Evented],{
    templateString:template,
    postCreate:function(){
        this.inherited(arguments);
        var str;
        on(this.navHeader,'click',lang.hitch(this,function(e){
            str=e.target.innerHTML.toLowerCase().replace(/\s+/g, '');
           this.emit("show_"+str,str);
        }));
      }
});
});
