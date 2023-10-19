block('header').elem('phone')(
    content()((node, ctx) => {
        return [
            // Кнопка
            {
                block: 'button',
                mods: {
                    type: 'link',
                    size: 'm'
                },
                url: `tel:${ctx.phone}`,
                text: ctx.phone,
                faw: {
                    name: 'phone',
                    style: 'solid'
                }
            }
        ];
    })
);
