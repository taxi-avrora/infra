block('default-404')(
    content()(() => {
        return {
            elem: 'box',
            content: [
                // Код
                {
                    elem: 'code',
                    content: 404
                },

                // Описание
                {
                    elem: 'desc',
                    content: [
                        'Нам не удалось найти запрошенную Вами страницу.',
                        { tag: 'br' },
                        'Возможно адрес этой ссылки устарел и материал размещен в другом месте нашего сайта.',
                        'В любом случае мы советуем Вам перейти на главную страницу сайта и продолжить изучение сайта.'
                    ]
                },

                // Кнопка
                {
                    elem: 'button',
                    content: {
                        block: 'button',
                        mods: {
                            theme: 'alex',
                            type: 'link',
                            size: 'l',
                            color: 'brand',
                            shadow: 'brand'
                        },
                        url: '/',
                        text: 'Перейти на главную'
                    }
                }
            ]
        };
    })
);
