modules.define(
    'attaches__preview', ['i-bem-dom'],
    function(provide, bemDom) {
        var Elem = bemDom.declElem('attaches', 'preview', {
            // Клик на кнопку удалить
            _onRemove() {
                this._remove();

                this._emit('remove', { name: this.params.name });
            },

            // Удалить превью
            _remove() {
                this.domElem.animate({
                    opacity: 0,
                    duration: 200
                }, {
                    complete: () => {
                        bemDom.destruct(this.domElem);
                    }
                });
            }
        }, {
            lazyInit: true,
            onInit: function() {
                this._domEvents('remove')
                    .on('click', this.prototype._onRemove)
            }
        });

        provide(Elem);
    }
);
