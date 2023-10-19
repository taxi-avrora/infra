block('modal').mod('admin-edit-news')(
    addJs()(true),

    elem('body').content()((node, ctx) => {
        var data = ctx.data || {},
            news = data.news || {},
            isEdit = !!news._id;

        return {
            block: 'form',
            mods: {
                ajax: true,
            },
            method: 'POST',
            action: '/admin/news/edit',
            enctype: 'multipart/form-data',
            content: [
                // Столбцы
                {
                    block: 'modal',
                    elem: 'columns',
                    content: [
                        // Левый
                        {
                            elem: 'column',
                            content: [
                                // Идентификатор
                                isEdit && {
                                    block: 'input',
                                    mods: {
                                        theme: 'alex',
                                        hidden: true
                                    },
                                    name: 'id',
                                    val: news._id.toString()
                                },

                                // Картинка новости
                                {
                                    block: 'form',
                                    elem: 'item',
                                    title: 'Изображение новости',
                                    content: {
                                        block: 'attaches',
                                        name: 'image',
                                        size: 1,
                                        types: ['image/*']
                                    }
                                },

                                // Заголовок
                                {
                                    block: 'form',
                                    elem: 'item',
                                    title: 'Заголовок новости',
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
                                        val: isEdit ? news.title : '',
                                        placeholder: 'Укажите заголовок',
                                    }
                                },

                                // Анонс
                                {
                                    block: 'form',
                                    elem: 'item',
                                    title: 'Анонс',
                                    content: {
                                        block: 'textarea',
                                        mods: {
                                            theme: 'alex',
                                            size: 'l',
                                            width: 'available',
                                            name: 'textPreview'
                                        },
                                        name: 'textPreview',
                                        val: isEdit ? news.textPreview : '',
                                        placeholder: 'Короткое описание новости'                                    }
                                }
                            ]
                        },

                        // Правый
                        {
                            elem: 'column',
                            content: [
                                // Текст новости
                                {
                                    block: 'form',
                                    elem: 'item',
                                    title: 'Новость',
                                    content: {
                                        block: 'textarea',
                                        mods: {
                                            theme: 'alex',
                                            size: 'l',
                                            width: 'available',
                                            name: 'text'
                                        },
                                        name: 'text',
                                        val: isEdit ? news.text : '',
                                        placeholder: 'Напишите текст новости, можно использовать тэги HTML',
                                    }
                                },
                            ]
                        }
                    ]
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
                },
            ],
        };
    }));
