modules.define(
    'pt-box', ['i-bem-dom', 'BEMHTML'],
    function(provide, bemDom, bemHtml) {
        var Block = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {

                    }
                }
            },

            // Сменить данные в блоке
            updateContent(bemJson, _duration) {
                var duration = _duration || 200;

                this.domElem.animate({
                    opacity: 0.2,
                    duration: duration
                }, {
                    complete: () => {
                        bemDom.update(this.domElem, bemHtml.apply(bemJson));
                        this.domElem.animate({
                            opacity: 1,
                            duration: duration
                        });
                    }
                });
            }
        });

        provide(Block);
    }
);
