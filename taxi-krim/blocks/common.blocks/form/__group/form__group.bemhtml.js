block('form').elem('group')(
    content()((node, ctx) => {
        return [
            ctx.title && {
                elem: 'group-title',
                content: ctx.title,
            },

            {
                elem: 'group-content',
                content: ctx.content,
            }
        ];
    })
);
