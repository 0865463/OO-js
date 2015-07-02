site.views.Gold = Backbone.View.extend({
    initialize: function(){
        site.events.on("donkeyClick", this.donkeyClickHandler, this);
        site.events.on("donkeyBuy", this.donkeyBuyHandler, this);
        site.events.on("donkeyDoubler", this.donkeyDoublerHandler, this);

        site.events.on("lawyerClick", this.lawyerClickHandler, this);
        site.events.on("lawyerBuy", this.lawyerBuyHandler, this);
        site.events.on("lawyerDoubler", this.lawyerDoublerHandler, this);

        site.events.on("devilClick", this.devilClickHandler, this);
        site.events.on("devilBuy", this.devilBuyHandler, this);
        site.events.on("devilDoubler", this.devilDoublerHandler, this);
    },

    donkeyClickHandler: function(){
        var donkeyCount = 0;
        this.collection.forEach(function(m){
            if(m.attributes.name == "Donkey"){
                donkeyCount += m.attributes.worth * m.attributes.multiplier;
            }
        });
        this.el.textContent = (parseInt(this.el.textContent) + donkeyCount).toString();
    },
    donkeyBuyHandler: function(){
        if(parseInt(this.el.textContent) < 10 ){}
        else{
            var tmpMultiplier;
            this.collection.forEach(function(m){
               if(m.attributes.name == "Donkey"){
                   tmpMultiplier = m.attributes.multiplier;
               }
            });
            this.el.textContent = (parseInt(this.el.textContent) - 10).toString();
            this.collection.add(new site.models.ValueModel({name: "Donkey", worth: 1, multiplier: tmpMultiplier}));
            site.events.trigger("donkeyBuy2");
        }
    },
    donkeyDoublerHandler: function(){
        if(parseInt(this.el.textContent) < 10000){}
        else{
            this.el.textContent = (parseInt(this.el.textContent) - 10000).toString();
            this.collection.forEach(function(m){
                if(m.attributes.name == "Donkey"){
                    m.attributes.multiplier += 1;
                }
            });
            site.events.trigger("donkeyBuy2");
        }
    },

    lawyerClickHandler: function(){
        var lawyerCount = 0;
        this.collection.forEach(function(m){
            if(m.attributes.name == "Lawyer"){
                lawyerCount += m.attributes.worth * m.attributes.multiplier;
            }
        });
        this.el.textContent = (parseInt(this.el.textContent) + lawyerCount).toString();
    },
    lawyerBuyHandler: function(){
        if(parseInt(this.el.textContent) < 1000 ){}
        else{
            this.el.textContent = (parseInt(this.el.textContent) - 1000).toString();
            var tmpMultiplier = 1;
            this.collection.forEach(function(m){
                if(m.attributes.name == "Lawyer"){
                    tmpMultiplier = m.attributes.multiplier;
                }
            });
            this.collection.add(new site.models.ValueModel({name: "Lawyer", worth: 100, multiplier: tmpMultiplier}));
            site.events.trigger("lawyerBuy2");
        }
    },
    lawyerDoublerHandler: function(){
        if(parseInt(this.el.textContent) < 1000000){}
        else{
            this.el.textContent = (parseInt(this.el.textContent) - 1000000).toString();
            this.collection.forEach(function(m){
                if(m.attributes.name == "Lawyer"){
                    m.attributes.multiplier += 1;
                }
            });
            site.events.trigger("lawyerBuy2");
        }
    },

    devilClickHandler: function(){
        var devilCount = 0;
        this.collection.forEach(function(m){
            if(m.attributes.name == "Devil"){
                devilCount += m.attributes.worth * m.attributes.multiplier;
            }
        });
        this.el.textContent = (parseInt(this.el.textContent) + devilCount).toString();
    },
    devilBuyHandler: function(){
        if(parseInt(this.el.textContent) < 100000 ){}
        else{
            this.el.textContent = (parseInt(this.el.textContent) - 100000).toString();
            var tmpMultiplier = 1;
            this.collection.forEach(function(m){
                if(m.attributes.name == "Devil"){
                    tmpMultiplier = m.attributes.multiplier;
                }
            });
            this.collection.add(new site.models.ValueModel({name: "Devil", worth: 10000, multiplier: tmpMultiplier}));
            site.events.trigger("devilBuy2");
        }
    },
    devilDoublerHandler: function(){
        if(parseInt(this.el.textContent) < 100000000){}
        else{
            this.el.textContent = (parseInt(this.el.textContent) - 100000000).toString();
            this.collection.forEach(function(m){
                if(m.attributes.name == "Devil"){
                    m.attributes.multiplier += 1;
                }
            });
            site.events.trigger("devilBuy2");
        }
    }
});