block('modal').mod('admin-edit-faq')(
    addJs()(true),

    elem('body').content()((node, ctx) => {
        var data = ctx.data || {},
            faq = data.faq || {},
            isEdit = !!faq._id;

        return {
            block: 'form',
            mods: {
                ajax: true,
            },
            method: 'POST',
            action: '/admin/faq/edit',
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
                    val: faq._id.toString()
                },

                // Вопрос
                {
                    block: 'form',
                    elem: 'item',
                    title: 'Вопрос',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            'has-clear': true,
                            name: 'question'
                        },
                        name: 'question',
                        val: isEdit ? faq.question : ''
                    }
                },

                // Ответ
                {
                    block: 'form',
                    elem: 'item',
                    title: 'Ответ',
                    content: {
                        block: 'textarea',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            name: 'answer'
                        },
                        name: 'answer',
                        val: isEdit ? faq.answer : '',
                        placeholder: 'Напишите подробный ответ на вопрос, можно использовать тэги HTML',
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
    }));
