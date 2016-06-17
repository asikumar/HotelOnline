define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/Evented',
    'dojo/on',
    'dojo/topic',
    'dojo/dom-class'
],function(declare,lang,Evented,on,topic){
    return declare('js/controllers/_PageHandler',[Evented],{
        _headerHandler:'',
        _pageNavigate: function(hash){
            //0-home, 1-city, 2-hotels, 3-contact, 4-aboutus
            switch(hash){
                case 'home':
                    this.container.selectChild(this.contentPane[0]);
                    break;
                case 'bhubaneswar':
                    this.contentPane[1].set("city",hash);
                    this.container.selectChild(this.contentPane[1]);
                    break;
                case 'puri':
                    this.contentPane[1].set("city",hash);
                    this.container.selectChild(this.contentPane[1]);
                    break;
                case 'aboutUs':
                    this.container.selectChild(this.contentPane[4]);
                    break;
                case 'contactUs':
                    this.container.selectChild(this.contentPane[2]);
                    break;
                case 'hotels':
                    this.container.selectChild(this.contentPane[1]);
                    topic.publish('nav/hotels','all');
                    break;

            }

        }
    });
});