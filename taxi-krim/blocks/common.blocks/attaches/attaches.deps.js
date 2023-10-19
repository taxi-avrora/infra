[
    //
    {
        shouldDeps: [
            //
            { elem: 'preview' },

            //
            { block: 'image' },
            {
                block: 'vector',
                mods: {
                    'plus-circle': true
                }
            },

            //
            {
                block: 'decorator',
                mods: {
                    'indent-a': 'm'
                }
            }
        ]
    },
    {
        tech: 'js',
        shouldDeps: [
            { elem: 'preview', tech: 'bemhtml' },
            { block: 'image', tech: 'bemhtml' }
        ]
    }
]
