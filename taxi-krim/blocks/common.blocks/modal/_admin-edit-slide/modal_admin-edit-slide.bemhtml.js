block('modal').mod('admin-edit-slide')(
    addJs()(true),

    elem('body').content()((node, ctx) => {
        var data = ctx.data || {},
            slide = data.slide || {},
            isEdit = !!slide._id;

        return {
            block: 'form',
            mods: {
                ajax: true,
            },
            method: 'POST',
            action: '/admin/slider/edit',
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
                    val: slide._id.toString()
                },

                // Картинка
                {
                    elem: 'item',
                    title: 'Фоновое изображение',
                    content: {
                        block: 'attaches',
                        name: 'image',
                        size: 1,
                        types: ['image/*']
                    }
                },

                // Заголовок
                {
                    elem: 'item',
                    title: 'Заголовок слайда',
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
                        val: isEdit ? slide.title : '',
                        placeholder: 'Укажите заголовок',
                    }
                },

                // Короткое описание
                {
                    elem: 'item',
                    title: 'Короткое описание',
                    content: {
                        block: 'textarea',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            name: 'text'
                        },
                        name: 'text',
                        val: isEdit ? slide.text : ''
                    }
                },

                // Кнопка
                {
                    elem: 'item',
                    title: 'Кнопка',
                    content: {
                        block: 'control-group',
                        mods: {
                            theme: 'alex'
                        },
                        content: [
                            // Название
                            {
                                block: 'input',
                                mods: {
                                    theme: 'alex',
                                    size: 'l',
                                    width: 'available',
                                    name: 'button'
                                },
                                name: 'button',
                                val: isEdit ? slide.button : 'Узнать больше'
                            },

                            // Ссылка
                            {
                                block: 'input',
                                mods: {
                                    theme: 'alex',
                                    size: 'l',
                                    width: 'available',
                                    name: 'url'
                                },
                                name: 'url',
                                val: isEdit ? slide.url : '',
                                placeholder: 'Ссылка'
                            }
                        ]
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
                },
            ],
        };
    }));
