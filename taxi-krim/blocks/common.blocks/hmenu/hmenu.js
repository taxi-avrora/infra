modules.define(
    'hmenu', ['i-bem-dom'],
    function(provide, bemDom) {
        provide(bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.lastSelectItem = this._elem({ elem: 'item', modName: 'selected', modVal: true });
                    }
                }
            },

            _onMouseEnter(event) {
                event.bemTarget.setMod('hovered');
            },

            _onMouseLeave(event) {
                event.bemTarget.delMod('hovered');
            },

            _onClickItem(event) {
                if (this.lastSelectItem) this.lastSelectItem.delMod('selected');

                event.bemTarget.setMod('selected');
                this.lastSelectItem = event.bemTarget;
            }
        }, {
            lazyInit: true,
            onInit() {
                this._domEvents('item')
                    .on('click', this.prototype._onClickItem)
                    .on('mouseenter', this.prototype._onMouseEnter)
                    .on('mouseleave', this.prototype._onMouseLeave);
            },
        }));
    },
);
