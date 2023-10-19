block('fa')(
    tag()('i'),

    cls()(function() {
        let classes = '',
            ctx = this.ctx;

        // Стиль
        switch(ctx.style) {
            case 'brands': classes += 'fab '; break;
            case 'solid': classes += 'fas '; break;
        }

        classes += ctx.name ? `fa-${ctx.name}` : '';
        classes += ctx.size ? ` fa-${ctx.size}x` : ' fa-lg';
        classes += ctx.spin ? ' fa-spin' : '';

        return classes;
    }),
);
