site.models.ValueModel = Backbone.Model.extend({
//    defaults: {
//        name: 'Donkey',
//        worth: 1,
//        multiplier: 1
//    },
    initialize: function(attributes){
        this.name = attributes.name;
        this.worth = attributes.worth;
        this.multiplier = attributes.multiplier
    }
});