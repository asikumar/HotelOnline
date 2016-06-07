/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/footer.html'
],function(declare,_WidgetBase,_TemplatedMixin,template){
    return declare('layouts.footer.Footer',[_WidgetBase,_TemplatedMixin],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
        }
    });
});
