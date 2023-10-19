block('pt-content-sidebar')(
    content()((node, ctx) => {
        return [
            // Основной контент
            {
                elem: 'content',
                content: ctx.content
            },

            // Сайдбар
            {
                elem: 'sidebar',
                content: ctx.sidebar
            }
        ];
    })
);
