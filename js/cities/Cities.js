define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/Cities.html',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/Evented'
],function(declare,
           _WidgetBase,
           _TemplatedMixin,
           template,
           on,
           lang,
           Evented){
    return declare('js.cities.Cities',[_WidgetBase,_TemplatedMixin,Evented],{
        templateString: template,
        city: null,
        details: "",
        _setCityAttr: {node:"_cityTitle",type:"innerHTML"},
        _setDetailsAttr:{node:"_description",type:"innerHTML"},
        postCreate:function(){
            this.inherited(arguments);

        }
    });
});
