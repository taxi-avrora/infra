block('modal').mod('admin-edit-auto')(
    addJs()(true),

    elem('body').content()((node, ctx) => {
        var data = ctx.data || {},
            auto = data.auto || {},
            isEdit = !!auto._id;

        return {
            block: 'form',
            mods: {
                ajax: true,
            },
            method: 'POST',
            action: '/admin/autos/edit',
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
                    val: auto._id.toString()
                },

                // Картинка
                {
                    elem: 'item',
                    title: 'Изображение',
                    content: {
                        block: 'attaches',
                        name: 'image',
                        size: 1,
                        types: ['image/*']
                    }
                },

                // Класс авто
                {
                    elem: 'item',
                    title: 'Класс автомобиля',
                    content: {
                        block: 'select',
                        mods: {
                            mode: 'radio',
                            theme: 'alex',
                            size: 'l'
                        },
                        name: 'class',
                        val: 'standart',
                        options: [
                            //
                            { val: 'standart', text: 'Стандарт' },
                            { val: 'comfort', text: 'Комфорт' },
                            { val: 'business', text: 'Бизнес' },
                            { val: 'minivan', text: 'Минивэн' }
                        ]
                    }
                },

                // Название
                {
                    elem: 'item',
                    title: 'Название авто',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            'has-clear': true,
                            name: 'name'
                        },
                        name: 'name',
                        val: isEdit ? auto.name : ''
                    }
                },

                // Мощность
                {
                    elem: 'item',
                    title: 'Мощность',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'alex',
                            size: 'l',
                            width: 'available',
                            name: 'power'
                        },
                        name: 'power',
                        val: isEdit ? auto.power : ''
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
