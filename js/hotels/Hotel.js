define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/dom-construct',
    'dojo/_base/array',
    'dojo/text!./template/hotel.html'
],function(declare,
           _WidgetBase,
           _TemplatedMixin,
           domConstruct,
           arrayUtil,
           template){
        return declare('js.hotels.Hotel',[_WidgetBase,_TemplatedMixin],{
            templateString:template,
            imageSource:'images/hotel1.jpg',
            nearByHotel:['images/image2.jpg','images/image2.jpg'],
            hotelId:null,//Id passed from previous widget on click of particular hotel
            /*TODO Service Call to get the response of hotel clicked by user*/
            postCreate:function(){
                this.inherited(arguments);
                this._createAmmentiesList(/*response.ammenities*/);
                this._createNearbyFacilities(/*response.locations*/);
            },
            _createAmmentiesList: function(/*ammenities*/){
                var ul = domConstruct.create("ul", {class:"hotel-amenities-list"}, this._hotelAmenities, "first");
                var amenities = [{title:"Parking",availiblity: true}, {title:"Internet",availiblity: true},
                    {title:"Card accepted",availiblity: true}, {title:"Elevator",availiblity: true}, 
                    {title:"Swimming pool",availiblity: false}, {title:"Hot water",availiblity: false},
                    {title:"Conference room",availiblity: true}, {title:"Bar",availiblity: true},
                    {title:"Dinning area",availiblity: true}, {title:"Banquet hall",availiblity: true},
                    {title:"TV",availiblity: false}, {title:"Fridge",availiblity: true},
                    {title:"Complimentary breakfast",availiblity: true}];

                arrayUtil.forEach(amenities, function(data){
                    var li = domConstruct.create("li", {innerHTML: data.title, class: data.availiblity ?'': 'amenities-not-available'}, ul);
                    var span = domConstruct.create("span", {class: "glyphicon glyphicon-arrow-right"},li);
                });
            },
            _createNearbyFacilities: function(){
                var ul = domConstruct.create("ul", {class:"journey-distance-info"}, this._journyDistance, "first");
                var nearBy = [{jrny:"Biju Pattnaik International Airport",distnc: '4.2'}, {jrny:"Bhubaneswar Railway Station",distnc: '2.0'},
                                     {jrny:"DTS Bus Stand",distnc: '2.5'}];

                arrayUtil.forEach(nearBy, function(data){
                    var li = domConstruct.create("li",null, ul);
                    var label = domConstruct.create("label",{innerHTML: data.jrny}, li);
                    var dist = domConstruct.create("span", {innerHTML: data.distnc+'km'},li);
                });
            },
            _createNearHotels: function(){
                var nearHotel = [
                    {
                        "name":"XYZ",
                        "id":"HTL1001"
                    },
                    {
                        "name":"ABC",
                        "id":"HTL1002"
                    }
                ];
                arrayUtil.forEach(nearHotel, function(data) {
                    var div = domConstruct.create("div", {class: "col-lg-6 col-md-6"}, this._nearestHotels, "first");
                    var img = domConstruct.create("img", {src: "images/image2.jpg"}, div);
                });
            },
            _setResponseAttr: function(response) {
                //Something
            }
        });
});
