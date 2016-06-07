define([
    'dojo/Deferred',
    'dojo/_base/xhr',
    'services/serviceUtil',
    'services/service/rtrvHotelDetails'

],function(Deferred, xhr, serviceUtil, rtrvHotelDetails){
    return (
        serviceWrapper.rtrvHotelDetails = function(data) {
            var deferred = new Deferred();
            var request = serviceUtil.buildHotelDetailRequest(data);
            xhr(request.url, request).then(
                function (success) {
                    //do something
                    deferred.resolve();
                },
                function (error) {
                    console.log(error);
                }
            );
            return deferred.promise;
        }
    )

});