site.views.Lawyer = Backbone.View.extend({
    events: {
        'click #lawyer': 'lawyerClick',
        'click #lawyerBuy': 'lawyerBuy',
        'click #lawyerDoubler': 'lawyerDoubler'
    },
    initialize: function(){
        site.events.on('aboutClick', this.aboutHandler, this);
        site.events.on('homeClick', this.homeHandler, this);
    },
    lawyerClick: function(e){
        e.preventDefault();
        site.events.trigger("lawyerClick");
    },
    lawyerBuy: function(e){
        e.preventDefault();
        site.events.trigger("lawyerBuy");
    },
    lawyerDoubler: function(e){
        e.preventDefault();
        site.events.trigger("lawyerDoubler");
    },

    aboutHandler: function(){
        $('#lawyerItem').hide();
    },
    homeHandler: function(){
        $('#lawyerItem').show();
    }
});