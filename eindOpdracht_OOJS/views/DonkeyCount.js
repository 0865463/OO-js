site.views.DonkeyCount = Backbone.View.extend({
    initialize: function(){
        site.events.on("donkeyBuy2", this.buyHandler, this);
    },
    buyHandler: function(){
        var donkeyCount = 0;
        var donkeyMultiplier = 1;
        this.collection.forEach(function(m){
            if(m.attributes.name == "Donkey"){
                donkeyCount += 1;
                donkeyMultiplier = m.attributes.multiplier;
            }
        });
        this.el.textContent = "Donkeys: "+donkeyCount+" | Multiplier: "+donkeyMultiplier;
    }
});