block('root').replace()((node, ctx) => {
    var data = this.data = ctx.data,
        meta = data.meta || {},
        og = meta.og || {},
        context = ctx.context;

    if (context) {
        return {
            block: `${context.template}-${context.page}`,
            data: context
        };
    }

    return {
        block: 'page',
        title: data.title || 'No Title',
        favicon: '/favicon.ico',
        styles: {
            elem: 'css',
            url: `/${data.bundle}/${data.template}.min.css?${Math.random()}`,
        },
        scripts: [
            { elem: 'js', url: `/${data.bundle}/${data.template}.min.js?${Math.random()}` },
            { elem: 'js', url: '/scripts/fontawesome5.0.8.js' }, // FontAwesome
            { elem: 'js', url: '//vk.com/js/api/openapi.js?153' }
        ],
        head: [
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
            { elem: 'meta', attrs: { name: 'description', content: meta.description } },
            { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
            { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
            { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
            { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'en_US' } },
            { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }
        ],
        data: ctx.data
    };
});
