block('form').elem('item')(
    addElemMods()((node, ctx) => {
        return {
            name: ctx.name
        };
    }),
    content()((node, ctx) => {
        return [
            ctx.title && {
                elem: 'item-title',
                content: ctx.title,
            },

            {
                elem: 'item-content',
                content: ctx.content,
            }
        ];
    })
);
