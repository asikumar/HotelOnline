define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/Evented',
    'dojo/text!./template/main.html',
    'services/config/stepConfig',
    'dojo/hash',
    'dojo/on',
    'dojo/topic',
    'dojo/_base/lang',
    'layouts/homePage/homePage',
    'layouts/header/Header',
    'layouts/footer/Footer',
    'dojo/ready',
    'dojo/dom-construct',
    'util/NavigationController',
    //Bijits used in template
    'dijit/layout/StackContainer',
    'dijit/layout/StackController',
    'dijit/layout/ContentPane'
],function(declare,
           _WidgetBase,
           _TemplatedMixin,
           Evented,
           template,
           stepConfig,
           hash,
           on,
           topic,
           lang,
           homePage,
           header,
           footer,
           ready,
           domConstruct,
           navControl
){
    return declare('js.controllers.MainController',[_WidgetBase, _TemplatedMixin, Evented , navControl],{
        templateString:template,
        node:null,

        buildRendering: function(){
            var _self=this;
            this.inherited(arguments);
        },
        postCreate: function(){
            this.inherited(arguments);

            this._historyStack = [],  // application history stack
                this._historyLen = 0,	 // current window.history length
                this._current = null, 	// current history item in application history stack
                this._next = null,		// next history item in application history stack
                this._previous = null,	// previous history item in application history stack
                this._index = 0,          //current hash index
                new header().placeAt(this._headerContainer);
            //new homePage().placeAt(this._widgetContainer);
            new footer().placeAt(this._footerContainer);
            hash('home', true);

            var currentHash = window.location.hash;
            if(currentHash && (currentHash.length > 1)){
                currentHash = currentHash.substr(1);
            }
            this._current = currentHash;
            this._initEventListeners();
        },
        _initEventListeners: function(){
            topic.subscribe("/dojo/hashchange", lang.hitch(this, function(newhash){
                this._onHashChange(newhash);
            }));
            topic.subscribe('hotel/select', lang.hitch(this, function(cityId){
                //Service Call here
            }));
            topic.subscribe('navChange', lang.hitch(this, function(event){
                this.navigationController(lang.getObject('srcElement.name', false, event));
            }));
        },
        _onHashChange: function(newhash){
            this._addHistory(newhash);
            this._loadCurrentWidget(newhash);
        },
        _getCurrentHashWidget: function(newhash){
            return stepConfig.steps[newhash].page;
        },
        _addHistory: function(hash) {
            //Add hash to application history stack
            this._historyStack.push({
                "hash": hash
            });
            this._index = this._historyStack.length - 1;
            if(!this._index > 0)
                this._previous = this._current;
            this._current = hash;
            this._next = null;
            console.log(this._historyStack);
        },
        _back: function(hash) {
            this._next = this._historyStack[this._index]["hash"];
            this._index--;
            if (this._index > 0) {
                this._previous = this._historyStack[this._index - 1]["hash"];
            } else {
                this._previous = null;
            }
            this._current = hash;
            console.log('_back called');
            //load Widget
            this._loadCurrentWidget(hash);

        },
        _forward: function(hash) {
            this._previous = this._historyStack[this._index]["hash"];
            this._index++;
            if (this._index < this._historyStack.length - 1) {
                this._next = this._historyStack[this._index + 1]["hash"];
            } else {
                this._next = null;
            }
            this._current = hash;
            console.log('_forward called');
            //load Widget
            this._loadCurrentWidget(hash);
        },
        _loadCurrentWidget: function(newhash){
            var widget = this._getCurrentHashWidget(newhash);
            console.log('_loadCurrentWidget::'+newhash);
            var self = this;

            //load widget to current content pane
            require([widget], function(page){
                ready(function(){
                    var stepTrackerObj = new page ({});
                    stepTrackerObj.startup();

                    domConstruct.place(stepTrackerObj.domNode, self._widgetPlaceHolder, 'last');
                });
            });
        }
    });

});