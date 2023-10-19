block('hmenu')(
    addJs()(true),

    tag()('h2'),

    content()((node, ctx) => {
        var items = [
            { val: 'price', url: '/price', title: 'Тарифы' },
            { val: 'autopark', url: '/autopark', title: 'Автопарк' },
            { val: 'routes', url: '/routes', title: 'Маршруты' },
            { val: 'faq', url: '/faq', title: 'Помощь' },
            // { val: 'about', url: '/about', title: 'О нас' },
            { val: 'partners', url: '/partners', title: 'Сотрудничество' },
            // { val: 'rent', url: '/rent', title: 'Аренда' },
        ];

        return items.map(item => ({
            block: 'link',
            mods: {
                type: 'internal'
            },
            url: item.url,
            content: item.title,
            mix: {
                block: 'hmenu',
                elem: 'item',
                elemMods: {
                    selected: (item.val === ctx.val),
                }
            }
        }));
    }),
);
