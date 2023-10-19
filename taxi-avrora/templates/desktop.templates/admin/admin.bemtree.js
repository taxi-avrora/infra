block('admin')(
    addJs()(true),

    content()((node, ctx) => {
        var page = ctx.data.page || 'index',
            menu = ctx.data.menu || [];

        return [
            // Шапка
            {
                elem: 'header',
                content: [
                    // Заголовок
                    {
                        elem: 'header-title',
                        content: 'Панель администратора'
                    }
                ]
            },

            // Тело страницы
            {
                elem: 'body',
                content: [
                    // Сайдбар слева
                    {
                        elem: 'sidebar',
                        content: [
                            // Меню
                            {
                                block: 'vmenu',
                                val: page,
                                items: menu,
                                mix: {
                                    block: 'admin',
                                    elem: 'menu'
                                }
                            }
                        ],
                        mix: {
                            block: 'pt-box',
                            mods: {
                                shadow: 'cloud',
                                view: 'default'
                            }
                        }
                    },

                    // Содержимое
                    {
                        elem: 'content',
                        content: [
                            // Страница
                            {
                                block: `admin-${page}`,
                                data: ctx.data
                            }
                        ]
                    }
                ]
            }
        ];
    })
);
