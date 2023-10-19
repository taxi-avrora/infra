block('attaches')(
    addJs()((node, ctx) => {
        return {
            count: ctx.count || 1
        };
    }),
    content()((node, ctx) => {
        return [
            // Файлы
            {
                elem: 'files'
            },

            // Кнопка выбора файла
            {
                elem: 'label',
                tag: 'label',
                attrs: {
                    tabindex: 0
                },
                content: [
                    // Иконка
                    {
                        block: 'vector',
                        mods: {
                            'plus-circle': 'm-ghost'
                        },
                        mix: [
                        {
                            block: 'attaches',
                            elem: 'icon'
                        },
                        {
                            block: 'decorator',
                            mods: {
                                'indent-a': 'm'
                            }
                        }
                        ]
                    },

                    // Контрол
                    {
                        elem: 'control',
                        tag: 'input',
                        attrs: {
                            type: 'file',
                            name: ctx.name,
                            multiple: ctx.count > 1,
                            accept: ctx.types.join(',')
                        }
                    }
                ]
            }
        ];
    })
);
