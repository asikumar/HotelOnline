define([
    'dojo/Deferred',
    'dojo/request',
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
            var config = hotelConfig['com.hotel.service'].rtrvHotelsdetail;
            return{
                url: config.url,
                data: value,
                preventCache: false,
                method: config.type,
                handleAs: 'json',
                timeout: 60000,
                headers:{"Content-Type": config.contentType}
            };
        }
    }
})