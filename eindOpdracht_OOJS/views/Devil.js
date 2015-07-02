site.views.Devil = Backbone.View.extend({
    events: {
        'click #devil': 'devilClick',
        'click #devilBuy': 'devilBuy',
        'click #devilDoubler': 'devilDoubler'
    },
    initialize: function(){
        site.events.on("aboutClick", this.aboutHandler, this);
        site.events.on('homeClick', this.homeHandler, this);
    },
    devilClick: function(e){
        e.preventDefault();
        site.events.trigger("devilClick");
    },
    devilBuy: function(e){
        e.preventDefault();
        site.events.trigger("devilBuy");
    },
    devilDoubler: function(e){
        e.preventDefault();
        site.events.trigger("devilDoubler");
    },

    aboutHandler: function(){
        $('#devilItem').hide();
    },
    homeHandler: function(){
        $('#devilItem').show();
    }
});