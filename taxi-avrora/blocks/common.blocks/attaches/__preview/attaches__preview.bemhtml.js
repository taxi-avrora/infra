block('attaches').elem('preview')(
    addJs()((node, ctx) => {
        return {
            name: ctx.name
        };
    }),
    prependContent()(() => {
        return {
            elem: 'remove',
            content: 'x'
        }
    })
);
