site.views.Donkey = Backbone.View.extend({
    events: {
        'click #donkey': 'donkeyClick',
        'click #donkeyBuy': 'donkeyBuy',
        'click #donkeyDoubler': 'donkeyDoubler'
    },
    initialize: function(){
        site.events.on("aboutClick", this.aboutHandler, this);
        site.events.on('homeClick', this.homeHandler, this);

    },
    donkeyClick: function(e){
        e.preventDefault();
        site.events.trigger("donkeyClick");
    },
    donkeyBuy: function(e){
        e.preventDefault();
        site.events.trigger("donkeyBuy");
    },
    donkeyDoubler: function(e){
        e.preventDefault();
        site.events.trigger("donkeyDoubler");
    },

    aboutHandler: function(){
        $('#donkeyItem').hide();
    },
    homeHandler: function(){
        $('#donkeyItem').show();
    }
});