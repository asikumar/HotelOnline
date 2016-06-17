/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/on',
    'dojo/topic',
    'dojo/text!./template/footer.html'
],function(declare,_WidgetBase,_TemplatedMixin,on, topic,template){
    return declare([_WidgetBase,_TemplatedMixin],{
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            on(this._footerHotels,'click', function(e){
                //e.preventDefault();
                topic.publish("navChange", 'hotels');
            });
        }
    });
});
