site.views.LawyerCount = Backbone.View.extend({
    initialize: function(){
        site.events.on("lawyerBuy2", this.buyHandler, this);
    },
    buyHandler: function(){
        var lawyerCount = 0;
        var lawyerMultiplier = 0;
        this.collection.forEach(function(m){
            if(m.attributes.name == "Lawyer"){
                lawyerCount += 1;
                lawyerMultiplier = m.attributes.multiplier;
            }
        });
        this.el.textContent = "Lawyers: "+lawyerCount+" | Multiplier: "+lawyerMultiplier;
    }
});