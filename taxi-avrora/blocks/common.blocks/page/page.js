modules.define(
    'page', ['i-bem-dom', 'BEMHTML', 'modal', 'api'],
    function(provide, bemDom, bemHtml, Modal, Api) {
        var Block = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                    }
                }
            },

            // Создать модальное окно
            // options {
            //      name: имя окна
            //      title: заголовок
            //      width: ширина
            //      autoclosable: автозакрытие
            // }
            createModal(options) {
                var id = `${options.name}-${options.width}`;

                bemDom.append(this.domElem, bemHtml.apply({
                    block: 'modal',
                    mods: {
                        theme: 'alex',
                        'has-animation': options.animation || true,
                        autoclosable: options.autoclosable || false,
                        [options.name]: true,
                        id: id
                    },
                    width: options.width || 400,
                    title: options.title || '',
                    data: options.data || {}
                }));

                var modal = this.findChildBlock({ block: Modal, modName: 'id', modVal: id });
                modal && modal.setMod('visible');

                // Уничтожаем окно после закрытия
                modal && this._events(modal)
                    .on({ modName: 'visible', modVal: '' }, () => {
                        bemDom.destruct(modal.domElem);
                    });

                return modal;
            }
        });

        provide(Block);
    }
);
