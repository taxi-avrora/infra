block('link')(
    tag()('a'),
    addJs()(true),
    addAttrs()((node, ctx) => {
        var isExternal = ctx.mods.type === 'external';

        return {
            href: isExternal ? `/go?url=${ctx.url}` : ctx.url,
            target: isExternal ? '_blank' : '_self'
        };
    })
);
