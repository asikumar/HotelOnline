define([
    'dojo/_base/declare',
    'dojo/hash',
    'dojo/_base/lang',
    'services/serviceWrapper'
],function(declare, hash, lang, serviceWrapper){
    return declare([],{
        postCreate:function(){
            this.inherited(arguments);

        },
        navigationController: function(nav){
            if(nav === 'hotels'){
                //Service Call
                serviceWrapper.rtrvHotelsdetail().then(function (rtrvRoleRlnResponseData) {
                    console.log(rtrvRoleRlnResponseData.success);
                });
            }
        }
    });
});
