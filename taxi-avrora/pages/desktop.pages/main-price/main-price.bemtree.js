block('main-price')(
    content()(() => {
        return {
            block: 'text',
            content: [
                'Стоимость поездки по Крыму Вы можете посмотреть в нашем калькуляторе, для этого Вам достаточно выбрать пункт отправления (ОТКУДА Вы едете), выбрать пункт назначения (КУДА Вы едете) и выбрать класс Автомобиля (Эконом, Комфорт, Бизнес, Минивэн). Цена сразу появится на экране, она ',
                { block: 'text', mods: { view: 'target' }, content: 'фиксирована и не будет никаких дополнительных платежей!' },
                ' Чтобы оставить заявку на такси необходимо вбить номер телефона в соответствующее поле калькулятора и наш диспетчер свяжется с Вами в течение 15 минут. Либо Вы можете воспользоваться кнопкой Позвонить.'
            ],
            mix: {
                block: 'page',
                elem: 'price-head'
            }
        };
    })
);
