block("main")(
    addJs()(true),

    content()((node, ctx) => {
        var page = ctx.data.page || "index";

        return [
            // Шапка
            {
                block: "header",
                title: [
                    { tag: "span", content: "«КРЫМ-ТАКСИ»" },
                    { tag: "br" },
                    "такси-трансфер по крыму",
                ],
                subtitle: [
                    "Междугороднее Такси по республике Крым.",
                    { tag: "br" },
                    "Встреча в аэропорту Симферополя.",
                ],
            },

            // Мобильный калькулятор
            {
                block: "wrapper",
                content: {
                    block: "calculate-taxi",
                    title: "Расчет стоимости такси по Крыму",
                },
                mix: {
                    block: "page",
                    elem: "mobile-calculate",
                },
            },

            // Вкладки
            {
                block: "wrapper",
                content: {
                    block: "tabs",
                    val: page,
                    items: [
                        { val: "index", url: "/", name: "Автомобили" },
                        { val: "about", url: "/about", name: "О нас" },
                        { val: "price", url: "/price", name: "Цены" },
                    ],
                    content: {
                        block: `main-${page}`,
                        data: ctx.data,
                    },
                },
                mix: {
                    block: "page",
                    elem: "tabs",
                },
            },

            // Подвал
            {
                block: "footer",
                items: [
                    [
                        "Телефон: ",
                        { tag: "span", content: "+7 (978) 034-93-92" },
                        " (WhatsApp, Viber, Telegram)",
                    ],
                    [
                        {
                            tag: "b",
                            content: {
                                tag: "span",
                                content: "«ТАКСИ КРЫМ»",
                            },
                        },
                    ],
                    [
                        "Email: ",
                        { tag: "span", content: "ataxikrim" },
                        "@gmail.com",
                    ],
                ],
            },

            // Яндекс.Метрика
            {
                block: "yandex-metrica",
                params: {
                    id: 48487430,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                },
            },
        ];
    })
);
