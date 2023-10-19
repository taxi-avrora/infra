block('main-index')(
    content()(() => {
        return [
            // classes
            {
                block: 'class',
                items: [
                    //
                    {
                        val: 1,
                        title: 'Стандарт',
                        bag: '3 места для багажа',
                        place: 'до 4 посадочных мест',
                        caption: 'Лучшее предложение для тех кто любит комфортно и недорого'
                    },
                    {
                        val: 2,
                        title: 'Комфорт',
                        bag: '3-4 места для багажа',
                        place: 'до 4 посадочных мест',
                        caption: 'Оптимальное соответствие цены и качества'
                    },
                    {
                        val: 3,
                        title: 'Бизнес',
                        bag: '3-4 места для багажа',
                        place: 'до 4 посадочных мест',
                        caption: 'Удовлетворит все пожелания самых требовательных'
                    },
                    {
                        val: 4,
                        title: 'Минивен',
                        bag: '6-7 мест для багажа',
                        place: 'до 8 посадочных мест',
                        caption: 'Великолепное решение для больших компаний'
                    }
                ]
            },

            // widgets
            {
                block: 'widgets',
                items: ['vk', 'instagram'],
                mix: {
                    block: 'page',
                    elem: 'widgets'
                }
            }
        ]
    })
);
