block("class")(
    js()(true),

    content()((node, ctx) => {
        return ctx.items.map((item) => {
            return {
                elem: "item",
                content: [
                    // photo
                    {
                        block: "image",
                        url: "images/autos/" + item.val + ".png",
                        mix: {
                            block: "class",
                            elem: "photo",
                        },
                    },

                    // content
                    {
                        elem: "content",
                        content: [
                            // title
                            {
                                elem: "title",
                                content: item.title,
                            },

                            // bag
                            {
                                elem: "bag",
                                content: item.bag,
                            },

                            // Количество посадочных мест
                            {
                                elem: "place",
                                content: item.place,
                            },

                            // Caption
                            {
                                elem: "caption",
                                content: item.caption,
                            },

                            // button
                            {
                                elem: "button",
                                content: {
                                    block: "button",
                                    mods: {
                                        size: "s",
                                    },
                                    text: "Заказать",
                                },
                            },
                        ],
                    },
                ],
            };
        });
    })
);
