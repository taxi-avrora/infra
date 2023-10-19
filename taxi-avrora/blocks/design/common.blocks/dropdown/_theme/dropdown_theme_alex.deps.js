({
    shouldDeps: [
        { block: 'popup', mods: { theme: 'alex' } },
        {
            include: false,
            mods: { switcher: 'link' },
            shouldDeps: { block: 'link', mod: 'theme', val: 'alex' }
        },
        {
            include: false,
            mods: { switcher: 'button' },
            shouldDeps: { block: 'button', mod: 'theme', val: 'alex' }
        }
    ]
})
