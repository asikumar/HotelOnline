/**
 * Created by khanjan on 6/5/2016.
 */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./template/main.html',
    'layouts/carousal/Carousal',
    'layouts/offers/Offers',
    'layouts/explore_cities/ExploreCities',
    'layouts/explore_destinations/Destinations',
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

    //Widgets used in template
    'layouts/header/Header',
    'layouts/footer/Footer'
    ],function(declare,
               _WidgetBase,
               _TemplatedMixin,
               _WidgetsInTemplateMixin,
               template,
               Carousal,
               Offers,
               ExploreCities,
               Destinations,
               hash,
               on,
               Evented,
               topic,
               domConstruct,
               domClass,
               cookie,
               ready,
               Cities,
               CheckInOut
        ){
        return declare('js.controllers.MainController',[_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,Evented],{
            templateString:template,
            buildRendering: function(){
                //FOR back function and setting hash on load
                var _self=this;
                this.inherited(arguments);
                this._carousal= new Carousal().placeAt(this._sectionContainer);
                this._offers=new Offers().placeAt(this._sectionContainer);
                this._exploreCities= new ExploreCities().placeAt(this._sectionContainer);
                this._destinations=new Destinations().placeAt(this._sectionContainer);
                on(this._exploreCities,'citySelected',function(e){
                    _self._initComplete(e);

                });
            },
            postCreate: function(){
                this.inherited(arguments);
                this._headerContainer.on('navChange',function(e){
                    console.log(e.target.innerHTML);
                });
                var _self=this;
                this.flag=false;
                this._pageNavigate();
                if(!cookie("pageId")) {
                    hash('home');
                    cookie("pageId","home",{expires:1});
                }
                else{
                    console.log("cookie"+cookie("pageId"));
                    _self._initComplete(cookie("pageId"));

                }
                 },
            _showHideHomePage:function(){

                    domClass.toggle(this._carousal.domNode,'hide');
                    domClass.toggle(this._offers.domNode,'hide');
                    domClass.toggle(this._destinations.domNode,'hide');
                    domClass.toggle(this._exploreCities.domNode,'hide');

            },
            _pageNavigate:function(){
                var _self=this;
                topic.subscribe('/dojo/hashchange',function(e){
                    console.log(e);
                    if(_self.flag){
                    switch(e){
                        case 'home':_self._showHideHomePage();domClass.add(_self._cities.domNode,'hide');break;
                        case 'bhubaneswar':_self._showHideHomePage();domClass.remove(_self._cities.domNode,'hide');break;
                        case 'puri':_self._showHideHomePage();domClass.remove(_self._cities.domNode,'hide');


                    }
                        cookie("pageId",e,{expires:1});
                    }
                });
            },
            _initComplete:function(e){
                if(!this._cities){
                    this._cities=new Cities({"city":e}).placeAt(this._sectionContainer);
                }
                else{
                    this._cities.set("city",e);
                }
                //_self._cities.showNode(e);
                this.flag=true;
                hash(e);
            }
        });

    });