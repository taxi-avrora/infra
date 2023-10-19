modules.define('popup', ['objects'], function(provide, objects, Popup) {
    var Mod = Popup.declMod({ modName: 'theme', modVal: 'alex' }, {
        _getDefaultParams: function() {
            return objects.extend(
                this.__base(), {
                    mainOffset: 5,
                    viewportOffset: 10
                });
        }
    });

    provide(Mod);
});
