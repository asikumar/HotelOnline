define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/Evented',
    'dojo/on',
    'dojo/dom-class'
],function(declare,lang,Evented,on){
    return declare('js/controllers/_PageHandler',[Evented],{
        _headerHandler:'',
        _pageNavigate:function(e){
            switch(e){
                case 'home':
                    this.container.selectChild(this.cp1);
                    break;
                case 'bhubaneswar':
                    this._cities.set("city",e);
                    this.container.selectChild(1);
                    break;
                case 'puri':
                    this._cities.set("city",e);
                    this.container.selectChild(this.cp2);
                    break;
                case 'aboutUs':
                    this.container.selectChild(this.cp4);
                    break;
                case 'contactUs':
                    this.container.selectChild(this.cp3);

            }
        }
    });
});