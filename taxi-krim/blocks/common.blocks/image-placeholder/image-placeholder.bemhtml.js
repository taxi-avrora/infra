block('image-placeholder', true)(
    tag()('img'),
    addAttrs()((node, ctx) => {
        var src = '//dummyimage.com/';

        if (ctx.sizes) {
            src += ctx.sizes.join('x');
        }

        return {
            src: src,
            width: ctx.sizes[0],
            height: ctx.sizes[1]
        };
    })
);
