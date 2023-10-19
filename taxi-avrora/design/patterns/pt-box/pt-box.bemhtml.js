block('pt-box')(
    addJs()(true),

    content()((node, ctx) => {
        return [
            // Заголовок
            ctx.title && {
                elem: 'title',
                content: ctx.title,
                mix: [
                    //
                    {
                        block: 'text',
                        mods: {
                            size: 'm',
                            view: 'primary'
                        }
                    },
                    {
                        block: 'decorator',
                        mods: {
                            'indent-b': 'm'
                        }
                    }
                ]
            },

            // Контент
            {
                elem: 'content',
                content: ctx.content
            }
        ];
    })
)
