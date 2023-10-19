modules.define(
    'empty', ['i-bem-dom'],
    function(provide, bemDom) {
        var Block = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {

                    }
                }
            }
        });

        provide(Block);
    }
);
