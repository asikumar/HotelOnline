define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dojo/_base/lang",
    "dojo/Deferred"
], function(declare, _WidgetBase, lang, Deferred){

    return declare("utilities/SteppedForm", [ _WidgetBase], {
        _current : null,
        loadStep: function(hash, oldHash){
            var deferred = new Deferred();
            var self= this;
            var oldwidget = stepConfig[oldHash].widget;
            var currentWidget = stepConfig[hash].widget;
            oldwidget.domNode.display = 'none';
            currentWidget.domNode.display = '';
            return deferred;
        }
    });
});