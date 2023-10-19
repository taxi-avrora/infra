modules.define(
    'app', ['i-bem-dom', 'api'],
    function(provide, bemDom, Api) {
        provide(bemDom.declBlock(this.name, {
            onSetMod: {

                js: {
                    inited() {
                        Api.setCsrf(this.params.csrf);
                    },
                },
            }
        }));
    },
);
