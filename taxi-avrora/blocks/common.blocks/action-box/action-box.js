modules.define(
    'action-box', ['i-bem-dom', 'button', 'popup'],
    function(provide, bemDom, Button, Popup) {
        provide(bemDom.declBlock(this.name, {
            // Выбор действия
            _onClickAction: function(event) {
                var type = event.bemTarget.params.val;

                // Если событие удаления
                if (type === 'remove') {
                    this.popupRemove = this.popupRemove || this._elem('popup-remove').findMixedBlock(Popup);

                    // Отслеживаем изменение видимости попапа
                    this._events(this.popupRemove)
                        .on({ modName: 'visible', modVal: '*' }, () => {
                            event.bemTarget.setMod('selected', this.popupRemove.hasMod('visible'));
                        });

                    // Не подтверждено
                    this._domEvents(this.popupRemove.findChildBlock({ block: Button, modName: 'action', modVal: 'cancel' }))
                        .once('click', () => {
                            // Закрываем попап
                            this.popupRemove.delMod('visible');
                        });

                    // Подвердил
                    this._domEvents(this.popupRemove.findChildBlock({ block: Button, modName: 'action', modVal: 'success' }))
                        .once('click', () => {
                            // Закрываем попап
                            this.popupRemove.delMod('visible');

                            return this._emit(type, this.params);
                        });

                    this.popupRemove
                        .setAnchor(event.bemTarget)
                        .setMod('visible');
                } else {
                    this._emit(type, this.params);
                }
            },

            // Удаление action-box
            remove: function() {
                return new Promise(resolve => {
                    this.domElem
                        .css('borderSpacing', 1)
                        .animate({
                            borderSpacing: 0,
                            opacity: 0
                        }, {
                            duration: 500,
                            step: now => {
                                this.domElem.css('transform', `scale(${now})`);
                            },
                            complete: () => {
                                bemDom.destruct(this.domElem);
                                resolve();
                            },
                        });
                });
            },
        }, {
            lazyInit: true,
            onInit: function() {
                this._domEvents('action')
                    .on('click', this.prototype._onClickAction);
            }
        }));
    },
);
