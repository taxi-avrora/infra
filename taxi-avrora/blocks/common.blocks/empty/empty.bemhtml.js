block('empty')(content()((node, ctx) => [
    // Иконка
    {
        elem: 'ico',
        content: {
            block: 'fa',
            name: ctx.icon,
        },
    },

    // Надпись
    {
        elem: 'caption',
        content: ctx.text,
    },
]));
