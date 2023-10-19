block("header")(
    js()(true),

    content()((node, ctx) => {
        return [
            // content
            {
                elem: "content",
                content: [
                    // info
                    {
                        elem: "info",
                        content: [
                            // logotype
                            {
                                elem: "logotype",
                            },

                            // title
                            {
                                elem: "title",
                                tag: "h1",
                                content: ctx.title,
                            },

                            // subtitle
                            {
                                elem: "subtitle",
                                tag: "h2",
                                content: ctx.subtitle,
                            },

                            // Номера телефонов
                            {
                                elem: "phones",
                                content: [
                                    //
                                    {
                                        elem: "phone",
                                        phone: "+7 (978) 923-80-77",
                                    },
                                    {
                                        elem: "phone",
                                        phone: "+7 (978) 510-27-62",
                                    },
                                ],
                            },

                            // Соц.кнопки
                            {
                                elem: "social-buttons",
                                content: [
                                    // Whatsapp
                                    {
                                        block: "button",
                                        text: "WhatsApp",
                                        mods: {
                                            theme: "whatsapp",
                                            type: "link",
                                            size: "m",
                                        },
                                        url:
                                            "whatsapp://send?phone=+79789238077",
                                        faw: {
                                            name: "whatsapp",
                                            style: "brands",
                                        },
                                    },

                                    // Viber
                                    {
                                        block: "button",
                                        text: "Viber",
                                        mods: {
                                            theme: "viber",
                                            type: "link",
                                            size: "m",
                                        },
                                        url: "viber://chat?number=79789238077",
                                        faw: {
                                            name: "viber",
                                            style: "brands",
                                        },
                                    },

                                    // Telegram
                                    {
                                        block: "button",
                                        text: "Telegram",
                                        mods: {
                                            theme: "telegram",
                                            type: "link",
                                            size: "m",
                                        },
                                        url:
                                            "https://telegram.me/Elena_Mercedes_Vito",
                                        faw: {
                                            name: "telegram",
                                            style: "brands",
                                        },
                                    },
                                ],
                            },
                        ],
                    },

                    // calculate
                    {
                        block: "calculate-taxi",
                        title: "Расчет стоимости такси по Крыму",
                    },
                ],
            },

            // background
            {
                elem: "image",
            },

            // shadow
            {
                elem: "shadow",
            },
        ];
    })
);
