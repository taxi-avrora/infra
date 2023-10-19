modules.define(
    'input', ['i-bem-dom'],
    function(provide, bemDom, Input) {
        var Block = bemDom.declBlock(Input, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.__base.apply(this, arguments);

                        this._domEvents('control')
                            .on('focusin', this._onFocusInControl);
                    }
                }
            },

            _onFocusInControl: function() {
                this.delMod('error');
            }
        });

        provide(Block);
    }
);
