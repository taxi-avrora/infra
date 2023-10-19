block('vmenu')(
    content()((node, ctx) => {
        return (ctx.items || []).map(_item => {
            return {
                elem: 'item',
                tag: 'a',
                attrs: {
                    href: _item.url,
                },
                elemMods: {
                    selected: (ctx.val === _item.val),
                },
                content: [
                    //
                    {
                        elem: 'left',
                        content: [
                            // Иконка
                            {
                                block: 'fa',
                                name: _item.ico || 'cog',
                                mix: {
                                    block: 'vmenu',
                                    elem: 'ico'
                                }
                            },

                            // Название
                            {
                                elem: 'name',
                                content: _item.title,
                                mix: {
                                    block: 'text',
                                    mods: {
                                        size: 'm',
                                        view: 'primary'
                                    }
                                }
                            },
                        ]
                    },

                    // Счетчик
                    !!_item.count && {
                        elem: 'count',
                        content: _item.count,
                        mix: {
                            block: 'text',
                            mods: {
                                size: 's',
                                view: 'primary'
                            }
                        }
                    }
                ],
                js: {
                    val: _item.val,
                }
            };
        });
    })
);
