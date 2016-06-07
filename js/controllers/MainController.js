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
    'js/hotels/Hotel',
    'dojo/hash',
    'dojo/on',
    'dojo/topic',
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
               Hotel,
               hash,
               on,
               topic
        ){
        return declare('js.controllers.MainController',[_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            buildRendering: function(){
                //FOR back function and setting hash on load
                hash('home');
                topic.subscribe('/dojo/hashchange',function(e){
                    console.log(e);
                });

                this.inherited(arguments);
                new Carousal().placeAt(this._sectionContainer);
                new Offers().placeAt(this._sectionContainer);
                new ExploreCities().placeAt(this._sectionContainer);
                new Destinations().placeAt(this._sectionContainer);
                new Hotel().placeAt(this._sectionContainer);
            },
            postCreate: function(){
                this.inherited(arguments);
                this._headerContainer.on('navChange',function(e){
                    console.log(e.target.innerHTML);
                });
            }
        });

    });