define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/contactUs.html',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/Evented'
],function(declare,_WidgetBase,_TemplatedMixin,template,on,lang,Evented){
    return declare('js.contactUs.ContactUs',[_WidgetBase,_TemplatedMixin,Evented],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
        }
    });
});


