block("action-box")(
    addJs()((node, ctx) => {
        return {
            id: ctx.info._id,
        };
    }),

    content()((node, ctx) => {
        return [
            // Действия
            {
                elem: "actions",
                content: ctx.actions.map((_action) => {
                    return {
                        elem: "action",
                        js: {
                            val: _action.val,
                        },
                        content: [
                            // Текст
                            _action.text,

                            // Попап подтвержения удаления
                            _action.val === "remove" && {
                                block: "popup",
                                mods: {
                                    target: "anchor",
                                    theme: "alex",
                                    autoclosable: true,
                                },
                                directions: ["bottom-right"],
                                content: [
                                    // Текст
                                    {
                                        block: "action-box",
                                        elem: "popup-remove-text",
                                        content:
                                            "Вы уверены что хотите удалить?",
                                        mix: {
                                            block: "text",
                                            mods: {
                                                view: "primary",
                                                size: "l",
                                            },
                                        },
                                    },

                                    // Кнопки
                                    {
                                        block: "action-box",
                                        elem: "popup-remove-buttons",
                                        content: [
                                            // Отменить
                                            {
                                                block: "button",
                                                mods: {
                                                    theme: "alex",
                                                    size: "l",
                                                    color: "second",
                                                    action: "cancel",
                                                },
                                                text: "Отменить",
                                                mix: {
                                                    block: "decorator",
                                                    mods: {
                                                        "indent-r": "s",
                                                    },
                                                },
                                            },

                                            // Удалить
                                            {
                                                block: "button",
                                                mods: {
                                                    theme: "alex",
                                                    size: "l",
                                                    color: "brand",
                                                    action: "success",
                                                },
                                                text: "Удалить",
                                            },
                                        ],
                                        mix: {
                                            block: "decorator",
                                            mods: {
                                                "indent-t": "s",
                                            },
                                        },
                                    },
                                ],
                                mix: [
                                    //
                                    {
                                        block: "action-box",
                                        elem: "popup-remove",
                                    },
                                    {
                                        block: "decorator",
                                        mods: {
                                            "space-a": "s",
                                        },
                                    },
                                ],
                            },
                        ],
                    };
                }),
            },

            // Контент
            {
                elem: "content",
                content: ctx.content,
                info: ctx.info,
            },
        ];
    })
);
