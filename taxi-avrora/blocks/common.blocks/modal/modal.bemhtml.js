block('modal')(
    addJs()(true),

    addMix()((node, ctx) => {
        return {
            block: 'popup',
            js: { zIndexGroupLevel: ctx.zIndexGroupLevel || 20 },
            mods: { autoclosable: ctx.mods.autoclosable }
        };
    }),

    addAttrs()({
        role: 'dialog',
        'aria-hidden': 'true'
    }),

    content()((node, ctx) => {
        return {
            elem: 'table',
            content: {
                elem: 'cell',
                content: {
                    elem: 'content',
                    content: [
                        // Заголовок
                        ctx.title && {
                            elem: 'title',
                            content: [
                                // Текст
                                {
                                    elem: 'title-text',
                                    content: ctx.title,
                                    mix: {
                                        block: 'text',
                                        mods: {
                                            size: 'l'
                                        }
                                    }
                                },

                                // Кнопка закрытия окна
                                ctx.mods.autoclosable && {
                                    elem: 'close',
                                    content: {
                                        block: 'vector',
                                        mods: {
                                            'close': 'm-base'
                                        }
                                    }
                                }
                            ],
                            mix: {
                                block: 'decorator',
                                mods: {
                                    'space-v': 's',
                                    'space-h': 'l'
                                }
                            }
                        },

                        // Тело
                        {
                            elem: 'body',
                            attrs: {
                                style: `width: ${ctx.width}px`
                            },
                            content: ctx.content,
                            data: ctx.data || {},
                            mix: {
                                block: 'decorator',
                                mods: {
                                    'space-a': 'l'
                                }
                            }
                        }
                    ]
                }
            }
        };
    })
);
