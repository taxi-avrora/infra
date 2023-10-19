block('modal').mod('admin-edit-route')(
    addJs()(true),

    elem('body').content()((node, ctx) => {
        var data = ctx.data || {},
            route = data.route || {},
            isEdit = !!route._id;

        return {
            block: 'form',
            mods: {
                ajax: true,
            },
            method: 'POST',
            action: '/admin/routes/edit',
            enctype: 'multipart/form-data',
            content: [
                // Идентификатор
                isEdit && {
                    block: 'input',
                    mods: {
                        theme: 'alex',
                        hidden: true
                    },
                    name: 'id',
                    val: route._id.toString()
                },

                // Картинка новости
                {
                    elem: 'item',
                    title: 'Фотография',
                    content: {
                        block: 'attaches',
                        name: 'image',
                        count: 1,
                        types: ['image/*']
                    }
                },

                // Маршрут
                {
                    elem: 'item',
                    title: 'Маршрут',
                    content: {
                        block: 'control-group',
                        mods: {
                            theme: 'alex'
                        },
                        content: [
                            //
                            {
                                block: 'input',
                                mods: {
                                    theme: 'alex',
                                    size: 'l',
                                    width: 'available',
                                    'has-clear': true,
                                    name: 'from'
                                },
                                name: 'from',
                                val: isEdit ? route.from : '',
                                placeholder: 'Город или полный адрес'
                            },
                            {
                                block: 'input',
                                mods: {
                                    theme: 'alex',
                                    size: 'l',
                                    width: 'available',
                                    'has-clear': true,
                                    name: 'to'
                                },
                                name: 'to',
                                val: isEdit ? route.to : '',
                                placeholder: 'Город или полный адрес'
                            }
                        ]
                    }
                },

                // Название маршрута
                {
                    elem: 'item',
                    title: 'Название маршрута',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            'has-clear': true,
                            name: 'title'
                        },
                        name: 'title',
                        val: isEdit ? route.title : '',
                        placeholder: 'Введите текст',
                    },
                },

                // Короткое описание
                {
                    elem: 'item',
                    title: 'Короткое описание маршрута',
                    content: {
                        block: 'textarea',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            name: 'textPreview'
                        },
                        name: 'textPreview',
                        val: isEdit ? route.textPreview : '',
                        placeholder: 'Анонс маршрута, нельзя использовать HTML',
                    }
                },

                // Описание
                {
                    elem: 'item',
                    title: 'Подробное описание',
                    content: {
                        block: 'textarea',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            name: 'text'
                        },
                        name: 'text',
                        val: isEdit ? route.text : '',
                        placeholder: 'Полное описание маршрута, можно использовать теги HTML',
                    }
                },

                // Кнопки
                {
                    elem: 'buttons',
                    content: {
                        block: 'button',
                        mods: {
                            type: 'submit',
                            theme: 'alex',
                            size: 'l',
                            color: 'brand',
                            shadow: 'brand'
                        },
                        text: isEdit ? 'Изменить' : 'Добавить',
                    }
                }
            ]
        };
    })
);
