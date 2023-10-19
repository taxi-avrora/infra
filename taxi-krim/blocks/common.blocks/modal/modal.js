modules.define(
    'modal', ['i-bem-dom'],
    function(provide, bemDom, Modal) {
        var Block = bemDom.declBlock(Modal, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.__base.apply(this, arguments);

                        this._domEvents('close')
                            .on('click', this._onClose);
                    }
                }
            },

            _onClose() {
                this.delMod('visible');
            }
        });

        provide(Block);
    }
);
