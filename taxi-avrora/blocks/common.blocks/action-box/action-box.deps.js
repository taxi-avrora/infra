({
    shouldDeps: [
        { block: 'date' },
        {
            block: 'popup',
            mods: {
                target: 'anchor',
                theme: 'alex',
                autoclosable: true
            }
        },
        {
            block: 'button',
            mods: {
                theme: 'alex'
            }
        },

        //
        {
            block: 'text',
            mods: {
                view: 'primary',
                size: 'l'
            }
        },
        {
            block: 'decorator',
            mods: {
                'space-a': 's',
                'indent-r': 's',
                'indent-t': 's'
            }
        }
    ]
})
