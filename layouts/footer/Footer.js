/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/footer.html',
    'dojo/on',
    'dojo/topic',
    'dojo/_base/lang',
    'dojo/Evented'
],function(declare,_WidgetBase,_TemplatedMixin,template,on,topic,lang,Evented){
    return declare('layouts.footer.Footer',[_WidgetBase, _TemplatedMixin, Evented],{
        templateString: template,
        postCreate: function(){
            this.inherited(arguments);
            on(this.footerNavigation, 'click', lang.hitch(this,function(e){
                e.preventDefault();
                topic.publish("navChange", e);
            }));
        }
    });
});
