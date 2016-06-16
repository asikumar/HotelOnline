define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./template/contactUs.html',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/Evented',

    'dijit/form/ValidationTextBox',
    'dijit/form/Button',
    'dijit/form/Textarea'
],function(declare,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,template,on,lang,Evented){
    return declare('js.contactUs.ContactUs',[_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,Evented],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
        }
    });
});


