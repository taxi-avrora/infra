block('page')(
    addMix()((node, ctx) => {
        return [
            // Тема
            {
                block: 'theme',
                mods: {
                    color: 'default',
                    size: 'default',
                    space: 'default'
                }
            },
            {
                block: 'app',
                js: {
                    csrf: ctx.data.csrf
                }
            }
        ];
    }),

    addJs()(true),

    content()((node, ctx) => {
        return {
            block: ctx.data.template,
            data: ctx.data
        };
    })
);
