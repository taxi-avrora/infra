block('modal').mod('admin-settings-slider')(
    addJs()(true),

    elem('body').content()((node, ctx) => {
        var data = ctx.data || {};

        return {
            block: 'form',
            mods: {
                ajax: true,
            },
            method: 'POST',
            action: '/admin/slider/settings',
            enctype: 'multipart/form-data',
            content: [
                // Затемнение
                {
                    block: 'form',
                    elem: 'item',
                    title: 'Затемнение',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            'has-clear': true,
                            name: 'shadow'
                        },
                        name: 'shadow',
                        val: data.shadow || '',
                        placeholder: '0 - без затемнения, 1 - полное затемнение'
                    }
                },

                // Длительность анимации
                {
                    block: 'form',
                    elem: 'item',
                    title: 'Длительность анимации',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            'has-clear': true,
                            name: 'duration'
                        },
                        name: 'duration',
                        val: data.duration || '',
                        placeholder: 'В милисекундах',
                    }
                },

                // Задержка автоскролинга
                {
                    block: 'form',
                    elem: 'item',
                    title: 'Задержка автоскролинга',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            'has-clear': true,
                            name: 'autoscroll'
                        },
                        name: 'autoscroll',
                        val: data.autoscroll || '',
                        placeholder: 'Укажите 0, чтобы выключить автоскролинг (в милисекундах)'
                    }
                },

                // Кнопки
                {
                    elem: 'buttons',
                    content: {
                        block: 'button',
                        mods: {
                            type: 'submit',
                            theme: 'alex',
                            size: 'l',
                            color: 'brand',
                            shadow: 'brand'
                        },
                        text: 'Сохранить',
                    }
                }
            ]
        };
    }));
