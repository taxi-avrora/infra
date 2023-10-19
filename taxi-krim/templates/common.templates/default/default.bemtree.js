block('default')(
    content()((node, ctx) => {
        var page = ctx.data.page || 'index',
            template = ctx.data.template || 'default';

        return [
            //
            {
                block: `${template}-${page}`,
                data: ctx.data
            },

            // Яндекс.Метрика
            {
                block: 'yandex-metrica',
                params: {
                    id: 46609128,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                }
            }
        ];
    })
);
