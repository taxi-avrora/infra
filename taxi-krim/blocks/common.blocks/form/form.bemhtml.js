block('form')(
    tag()('form'),

    addJs()(true),

    addAttrs()((node, ctx) => ({
        method: ctx.method || 'POST',
        action: ctx.action,
        enctype: ctx.enctype || 'application/x-www-form-urlencoded',
    })),

    prependContent()((node, ctx) => {
        return [
            // Скрытое поле CSRF
            ctx.csrf &&
            {
                block: 'input',
                mods: {
                    type: 'hidden'
                },
                name: '_csrf',
                val: ctx.csrf
            },

            // Сообщение формы
            {
                elem: 'message',
                elemMods: {
                    visible: Boolean(ctx.warning),
                    type: ctx.warning ? 'warning' : 'success'
                },
                content: ctx.warning
            }
        ];
    })
);
