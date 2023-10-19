[
    //
    {
        shouldDeps: [
            //
            { block: 'app' },
            {
                block: 'modal',
                mods: {
                    theme: 'alex',
                    autoclosable: true
                }
            },

            // Тема
            {
                block: 'theme',
                mods: {
                    color: 'default',
                    size: 'default',
                    space: 'default'
                }
            }
        ]
    },
    {
        tech: 'js',
        shouldDeps: [
            //
            {
                block: 'modal',
                mods: {
                    theme: 'alex',
                    autoclosable: true
                },
                tech: 'bemhtml'
            }
        ]
    }
]
