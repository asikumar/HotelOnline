/**
 * Created by khanjan on 6/6/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./template/checkInOut.html',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/Evented',
    'dijit/Dialog',
    'dijit/form/Button',

    'dijit/form/DateTextBox'
],function(declare,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,template,on,lang,Evented,Dialog,Button){
    return declare('js.check_in_out.CheckInOut',[_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,Evented],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
        }
    });
});