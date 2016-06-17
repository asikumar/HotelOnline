define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./template/Cities.html',
    'dojo/on',
    'dojo/_base/lang',
    'dojo/topic',
    'util/util',
    'dojo/dom-construct',
    'dojo/_base/array',
    'services/serviceWrapper',
    'dojo/Evented'
],function(declare,_WidgetBase,_TemplatedMixin,template,on,lang,topic,util,domConstruct,arrayUtil,serviceWrapper,Evented){
    return declare([_WidgetBase,_TemplatedMixin,Evented],{
        templateString:template,
        city:null,
        postCreate:function(){
            this.inherited(arguments);
            topic.subscribe('nav/hotels', lang.hitch(this, function(city){
                this._cityDetailsSection.style.display= 'none';
                this._clickHandler(city);
            }));
            on(this._browseAllBtn, "click" , function(){
                this._cityDetailsSection.style.display= 'none';
                this._hotelDetailsSection.style.display= '';
            });
        },
        _clickHandler:function(city){
            var self = this;
            var response = {};
            response.type = city;
            if(util.global && util.global.hotelList){
                response.hotels = lang.getObject("global.hotelList", false, util);
                this.set('hotels', response);
            }else {
                serviceWrapper.rtrvHotelsdetail(city).then(function (rtrvHotelResponseData) {
                    console.log(rtrvHotelResponseData.success);
                    lang.setObject("global.hotelList", rtrvHotelResponseData.hotelsList.hotels, util);
                    response.hotels = lang.getObject("hotelsList.hotels", false, rtrvHotelResponseData);
                    self.set('hotels', response);
                });
            }

        },
        _setCityAttr:function(city){
            this._cityDetailsSection.style.display= '';
            this._hotelDetailsSection.style.display= 'none';
            this._cityTitle.innerHTML = city.toUpperCase();
            this._clickHandler(city);
        },
        _setHotelsAttr:function(response){
            if(!response){
                this._cityDetailsSection.style.display= '';
                this._hotelDetailsSection.style.display= 'none';
                return;
            }
            arrayUtil.forEach(response.hotels, lang.hitch(this, function(hotel) {
                var div = domConstruct.create("div", {class: "col-lg-3 col-md-3 list"}, this._hotelContainer);
                var a = domConstruct.create("a",{},div);
                a.href='javascript:void(0)';
                var img = domConstruct.toDom("<img src='images/image1.jpg'>");
                domConstruct.place(img, a);
                var para = domConstruct.create("p", {class: "list-title strong"}, div);
                para.innerHTML = hotel.hotel;
                var tag = domConstruct.create("div", {class: "price-box"}, div);
                tag.innerHTML = hotel.price;
                var htlId = hotel.id;
                on(div, "click" , function(){
                    topic.publish('individual/hotel',htlId);
                    console.log(htlId);
                });
            }));
        }


    });
});
