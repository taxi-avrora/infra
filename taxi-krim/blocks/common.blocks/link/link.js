modules.define(
    'link', ['i-bem-dom',],
    function(provide, bemDom) {
        var Block = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.__base.apply(this, arguments);

                        // Только внутренние ссылки загружаются по AJAX
                        // this.hasMod('type', 'internal') && this._domEvents()
                        //     .on('click', this._onClick);

                        this._domEvents()
                            .on('mouseenter', this._onMouseEnter)
                            .on('mouseleave', this._onMouseLeave);
                    }
                }
            },

            _onMouseEnter() {
                this.setMod('hovered')
            },

            _onMouseLeave() {
                this.delMod('hovered')
            },

            _onClick(event) {
                event.preventDefault();

                var link = event.bemTarget.domElem.attr('href');

                this._emit('click', {
                    url: link
                });
            }
        });

        provide(Block);
    }
);
