site.views.About = Backbone.View.extend({
    initialize: function(){
        site.events.on("aboutClick", this.aboutHandler, this);
        site.events.on("homeClick", this.homeHandler, this);
    },

    aboutHandler: function(){
        $('#aboutText').show();
    },
    homeHandler: function(){
        $('#aboutText').hide();
    }
});