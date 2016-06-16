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
    'js/check_in_out/CheckInOut',
    'js/contactUs/ContactUs',
    'dojo/text!templates/aboutUs/aboutUs.html',
    './_PageHandler',
    'dijit/layout/StackController',
    'dijit/layout/StackContainer',
    'dijit/layout/ContentPane',

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
               CheckInOut,
               ContactUs,
               aboutUs,
               _PageHandler,
               StackController,
               StackContainer,
               ContentPane

        ){
        return declare('js.controllers.MainController',[_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,Evented,_PageHandler],{
            templateString:template,
            buildRendering: function(){
                this.inherited(arguments)
                    this._homePage=new HomePage();
                    this._cities=new Cities({"city":"e"});
                    this._contactUsNode=new ContactUs();

                    this.container=new StackContainer({id:"sc",doLayout:false}).placeAt(this._sectionContainer);
                    var cp1=new ContentPane({content:this._homePage}),
                        cp2=new ContentPane({content:this._cities}),
                        cp3=new ContentPane({content:this._contactUsNode}),
                        cp4=new ContentPane({content:aboutUs});
                    this.container.addChild(cp1,0);
                    this.container.addChild(cp2,1);
                    this.container.addChild(cp3,2);
                    this.container.addChild(cp4,3);
                    this.cp2=cp2;
                    this.cp1=cp1;
                    this.cp3=cp3;
                    this.cp4=cp4;
                    var controller = new StackController({containerId:"sc"});
                    controller.startup();
                    this.container.startup();
                    this.container.selectChild(cp1);
                    },
            postCreate: function() {
                this.inherited(arguments);
                var currentUrl=window.location.href,navUrl;
                if (!(currentUrl.indexOf('#') > -1)) {
                    hash('home', true);
                } else{
                    navUrl=currentUrl.split('#')[1];
                   }
                topic.subscribe('/dojo/hashchange',lang.hitch(this,function(e){
                    this._pageNavigate(e);
                }));
                if(navUrl){
                    this._pageNavigate(navUrl);
                }
            },

        });

    });