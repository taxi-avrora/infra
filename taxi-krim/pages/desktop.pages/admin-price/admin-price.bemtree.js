block('admin-price')(
    addJs()(true),

    content()((node, ctx) => {
        var data = ctx.data,
            cities = data.cities || [],
            options_cities = cities.map(_city => {
                return { val: _city.name, text: _city.name };
            });

        return [
            // Форма изменения тарифов
            {
                block: 'pt-content-sidebar',
                content: {
                    block: 'pt-box',
                    mods: {
                        view: 'default',
                        shadow: 'cloud',
                        'space-a': 'm'
                    },
                    content: {
                        block: 'form',
                        mods: {
                            ajax: true
                        },
                        action: '/admin/price/save',
                        method: 'POST',
                        content: [
                            // Маршрут
                            {
                                elem: 'item',
                                title: 'Выберите маршрут',
                                content: [
                                    // Откуда
                                    {
                                        block: 'select',
                                        mods: {
                                            mode: 'radio',
                                            theme: 'alex',
                                            size: 'l',
                                            name: 'from'
                                        },
                                        name: 'from',
                                        options: options_cities,
                                        optionsMaxHeight: 300,
                                        mix: {
                                            block: 'decorator',
                                            mods: {
                                                'indent-r': 's'
                                            }
                                        }
                                    },

                                    // Куда
                                    {
                                        block: 'select',
                                        mods: {
                                            mode: 'radio',
                                            theme: 'alex',
                                            size: 'l',
                                            name: 'to'
                                        },
                                        name: 'to',
                                        options: options_cities,
                                        optionsMaxHeight: 300
                                    }
                                ]
                            },

                            // Стоимость
                            {
                                elem: 'item',
                                title: 'Стоимость поездки для разных классов авто',
                                content: {
                                    block: 'control-group',
                                    mods: {
                                        theme: 'alex'
                                    },
                                    content: [
                                        // Стандарт
                                        {
                                            block: 'input',
                                            mods: {
                                                theme: 'alex',
                                                size: 'l',
                                                name: 'price_standart'
                                            },
                                            autocomplete: false,
                                            name: 'price_standart',
                                            placeholder: 'Стандарт'
                                        },

                                        // Комфорт
                                        {
                                            block: 'input',
                                            mods: {
                                                theme: 'alex',
                                                size: 'l',
                                                name: 'price_comfort'
                                            },
                                            autocomplete: false,
                                            name: 'price_comfort',
                                            placeholder: 'Комфорт'
                                        },

                                        // Бизнес
                                        {
                                            block: 'input',
                                            mods: {
                                                theme: 'alex',
                                                size: 'l',
                                                name: 'price_business'
                                            },
                                            autocomplete: false,
                                            name: 'price_business',
                                            placeholder: 'Бизнес'
                                        },

                                        // Минивэн
                                        {
                                            block: 'input',
                                            mods: {
                                                theme: 'alex',
                                                size: 'l',
                                                name: 'price_minivan'
                                            },
                                            autocomplete: false,
                                            name: 'price_minivan',
                                            placeholder: 'Минивэн'
                                        },
                                    ]
                                },
                                mix: {
                                    block: 'admin-price',
                                    elem: 'prices'
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
                                        color: 'brand',
                                        size: 'l'
                                    },
                                    text: 'Изменить цены'
                                }
                            }
                        ]
                    }
                },
                sidebar: {
                    block: 'pt-box',
                    mods: {
                        view: 'default',
                        shadow: 'cloud',
                        'space-a': 's'
                    },
                    content: 'Свободное место'
                }
            }
        ];
    })
);
