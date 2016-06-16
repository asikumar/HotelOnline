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
        callService: function(){
            var config = hotelConfig['com.hotel.service'].rtrvDestns;
            return{
                url: config.url,
                preventCache: false,
                method: config.type,
                handleAs: 'text',
                timeout: 60000,
                headers:{"Content-Type": config.contentType}
            };
        }
    }
})