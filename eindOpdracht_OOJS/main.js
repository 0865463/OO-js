(function () {
    site.init = function(){
        $('#aboutText').hide();

        var valueCollection = new site.collections.ValueCollection();
        valueCollection.add(new site.models.ValueModel({name: "Donkey", worth: 1, multiplier: 1}));

        var app_router = new site.routers.AppRouter();

        new site.views.Gold({el: "#gold", collection: valueCollection, router: app_router});

        new site.views.Donkey({el: "#donkeyItem"});
        new site.views.DonkeyCount({el: "#donkeyCount", collection: valueCollection});

        new site.views.Lawyer({el: "#lawyerItem"});
        new site.views.LawyerCount({el: "#lawyerCount", collection: valueCollection});

        new site.views.Devil({el: "#devilItem"});
        new site.views.DevilCount({el: "#devilCount", collection: valueCollection});

        new site.views.About({el: "#aboutText"});

        Backbone.history.start();

        app_router.on('route:home', function(){
            site.events.trigger('homeClick');
        });

        app_router.on('route:about', function(){
            site.events.trigger('aboutClick');
        });
    };

    site.$document.on('ready', site.init);
}) ();