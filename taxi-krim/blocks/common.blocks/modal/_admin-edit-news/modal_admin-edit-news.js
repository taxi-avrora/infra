modules.define(
    'modal', ['form'],
    function(provide, Form, Modal) {
        var Mod = Modal.declMod({ modName: 'admin-edit-news', modVal: true }, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.__base.apply(this, arguments);

                        this.form = this.findChildBlock(Form);
                        this.form && this._events(this.form)
                            .on('success', this._onSuccessForm);
                    }
                }
            },

            // Успешный ответ формы
            _onSuccessForm(event, data) {
                this._emit('edit-news', { news: data.data });
            }
        });

        provide(Mod);
    }
);
