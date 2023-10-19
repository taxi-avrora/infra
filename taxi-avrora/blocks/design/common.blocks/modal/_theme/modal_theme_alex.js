/**
 * @module modal
 */
modules.define(
    'modal',
    function(provide, Modal) {
        /**
         * @exports
         * @class modal
         * @bem
         */
        var Mod = Modal.declMod({ modName: 'theme', modVal: 'alex' }, /** @lends modal.prototype */ {
            onSetMod: {
                'visible': {
                    'true': function() {
                        this
                            // Apply the animation only at first opening, otherwise the animation will be played when block
                            // initialized.
                            .setMod('has-animation')
                            .__base.apply(this, arguments);
                    }
                }
            }
        });

        provide(Mod);
    }
);
