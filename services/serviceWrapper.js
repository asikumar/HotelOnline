define([
    'dojo/Deferred',
    'dojo/request/xhr',
    'services/serviceUtil',
    'services/service/rtrvHotelDetails',
    'services/service/rtrvHotelsDetails'

],function(Deferred, xhr, serviceUtil, rtrvHotelDetails, retrieveHotelsDetails){
    var serviceWrapper = {};
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
    };
    serviceWrapper.rtrvDestinationDetails = function() {
        var deferred = new Deferred();

        return deferred.promise;
    };
    serviceWrapper.rtrvHotelsdetail = function(){
        var deferred = new Deferred();
        var result = {};
        var self = this;

        var requestData = retrieveHotelsDetails.callService("hotels");
            xhr(requestData.url, requestData).then(
                //Success
                function(responseData) {
                    result.success = true;
                    result.hotelsList = responseData;
                    deferred.resolve(result);
                },
                //Error
                function(error) {
                    result.success = false;
                    deferred.resolve(result);
                });

        return deferred.promise;
    };
    return serviceWrapper;

});