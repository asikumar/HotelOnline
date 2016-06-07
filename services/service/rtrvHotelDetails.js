define([
    'dojo/Deferred',
    'dojo/_base/request',
    'dojo/json',
    'dojo/dom-form',
    '../config/hotelConfig'
],function(Deferred,
           request,
           json,
           domform,
           hotelConfig){
    return {
        callService: function(value){
            var config = hotelConfig['com.hotel.service'].rtrvHoteldetail;
            return{
                url: config.url,
                data:json.stringify(value),
                preventCache: false,
                method: config.type,
                handleAs: 'json',
                timeout: 60000,
                headers:{"Content-Type": config.contentType}
            };
        }
    }
})