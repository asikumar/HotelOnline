/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/lang',
    'dojo/text!./template/main.html',
    'layouts/homePage/HomePage',
    'dojo/hash',
    'dojo/on',
    'dojo/Evented',
    'dojo/topic',
    'dojo/dom-construct',
    'dojo/dom-class',
    'dojo/cookie',
    'dojo/ready',
    'js/cities/Cities',
    'js/hotels/Hotel',
    'js/check_in_out/CheckInOut',
    'js/contactUs/ContactUs',
    'dojo/text!templates/aboutUs/aboutUs.html',
    './_PageHandler',
    'dijit/layout/StackController',
    'dijit/layout/StackContainer',
    'dijit/layout/ContentPane',
    'services/config/stepConfig',
    'util/NavigationController',

    //Widgets used in template
    'layouts/header/Header',
    'layouts/footer/Footer'
],function(declare,
           _WidgetBase,
           _TemplatedMixin,
           _WidgetsInTemplateMixin,
           lang,
           template,
           HomePage,
           hash,
           on,
           Evented,
           topic,
           domConstruct,
           domClass,
           cookie,
           ready,
           Cities,
           Hotel,
           CheckInOut,
           ContactUs,
           aboutUs,
           _PageHandler,
           StackController,
           StackContainer,
           ContentPane,
           stepConfig,
           NavigationController

){
    return declare('js.controllers.MainController',[_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,Evented,NavigationController,_PageHandler],{
        templateString:template,
        contentPane: [],
        buildRendering: function(){
            this.inherited(arguments);
            var self = this;
            var count= 0;
            this.container = new StackContainer({id:"sc",doLayout:false}).placeAt(this._sectionContainer);
            var controller = new StackController({containerId:"sc"});
            //Loop for creating all content Panes
            /*
             0-home, 1-city, 2-hotels, 3-contact, 4-aboutus
             on click of hotel in city page open hotel page
             container.next();
             */
            for(var i=0; i < stepConfig.steps.length-1; i++){
                var widget = stepConfig.steps[i].page;
                this._createContent(widget, self, i);
                count++;
                if(self.contentPane.length > 0)
                    self.container.addChild(self.contentPane[i], i);
            }
            self.contentPane.push(new ContentPane({content: aboutUs}));
            self.container.addChild(self.contentPane[count], count);
            controller.startup();
            this.container.startup();
            this.container.selectChild(this.contentPane[0]);
        },
        postCreate: function() {
            this.inherited(arguments);
            var currentUrl = window.location.href;
            var navUrl= '';
            if (!(currentUrl.indexOf('#') > -1)) {
                hash('home', true);
            } else{
                navUrl=currentUrl.split('#')[1];
            }

            if(navUrl){
                this._pageNavigate(navUrl);
            }

            this._initEventListeners();
        },
        _createContent: function(widget, self,i){
            require([widget,'dijit/layout/ContentPane'], function(page ,ContentPane) {
                var stepTrackerObj = new page({});
                self.contentPane.push(new ContentPane({content: stepTrackerObj}));
            });
        },
        _initEventListeners: function(){
            topic.subscribe('/dojo/hashchange',lang.hitch(this,function(_hash){
                this._pageNavigate(_hash);
            }));
            topic.subscribe('navChange', lang.hitch(this, function(tab){
                this.navigationController(tab);
            }));
            //topic.publish('individual/hotel',htlId);

        }

    });

});
