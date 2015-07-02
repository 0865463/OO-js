site.views.DevilCount = Backbone.View.extend({
    initialize: function(){
        site.events.on("devilBuy2", this.buyHandler, this);
    },
    buyHandler: function(){
        var devilCount = 0;
        var devilMultiplier = 1;
        this.collection.forEach(function(m){
            if(m.attributes.name == "Devil"){
                devilCount += 1;
                devilMultiplier = m.attributes.multiplier;
            }
        });
        this.el.textContent = "Devils: "+devilCount+" | Multiplier: "+devilMultiplier
    }
});